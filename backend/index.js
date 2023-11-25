const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const path = require('path')
const localStorage = require('localStorage')
const bcrypt = require('bcrypt')
const app = express()
const port = 8000



app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(bodyParser.json())

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: '123456',
  database: 'db_area515'
});
connection.connect((err) => {
  if(err){
    console.log(err)
    connection.end
    return
  }else{
    console.log('thanhcong');
  }
})
connection.query(
  'SELECT * FROM `PRODUCT`', (err, result) => {
    if(err){
      console.log(err)
      connection.end
      return
    }
    app.get('/product',(req,res) => {
      res.json(result)
    })
  },
  );
app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  connection.query('SELECT * FROM `PRODUCT` WHERE `id` = ?', [productId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(result[0]);
    }
  });
});
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  connection.query('SELECT id, firstname, lastname, email,address, phone FROM `CUSTOMER` WHERE `id` = ?', [userId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(result[0]);
    }
  });
});
app.post('/user/:id/update', async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstname, lastname, phone, address } = req.body;

    // Check if the user exists
    const userExists = await new Promise((resolve, reject) => {
      connection.query('SELECT * FROM CUSTOMER WHERE id = ?', [userId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.length > 0);
        }
      });
    });

    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    connection.query(
      'UPDATE CUSTOMER SET firstname = ?, lastname = ?, phone = ?, address = ? WHERE id = ?',
      [firstname, lastname, phone, address, userId],
      (error, results) => {
        if (error) {
          console.error('Error updating user information:', error);
          return res.status(500).json({ message: 'User information update failed' });
        } else {
          console.log('User information updated successfully');
          return res.status(200).json({ message: 'User information updated successfully' });
        }
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/register', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const userExists = await new Promise((resolve, reject) => {
      connection.query('SELECT * FROM CUSTOMER WHERE email = ?', [email], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.length > 0);
        }
      });
    });

    if (userExists) {
      return res.status(400).json({ message: 'Email này đã được đăng ký!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    connection.query('INSERT INTO CUSTOMER (firstname, lastname, email, password) VALUES (?, ?, ?, ?)',
      [firstname, lastname, email, hashedPassword], (error, results) => {
        if (error) {
          console.error('Error inserting data:', error);
          res.status(500).json({ message: 'Registration failed' });
        } else {
          console.log('Data inserted successfully');
          res.status(201).json({ message: 'User registered successfully' });
        }
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await new Promise((resolve, reject) => {
      connection.query('SELECT * FROM CUSTOMER WHERE email = ?', [email], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });

    if (!user) {
      res.status(400).json({ message: 'Người dùng không tồn tại' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({ message: 'Mật khẩu không chính xác' });
    }
    localStorage.setItem("userId",user.id);
    res.status(200).json({ message: 'Đăng nhập thành công', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi server' });
  }
});

app.post('/reset-password', async (req, res) => {
  try {
    const { email, password, rePassword } = req.body;

    if (password !== rePassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    connection.query(
      'UPDATE CUSTOMER SET password = ? WHERE email = ?',
      [hashedPassword, email],
      (error, results) => {
        if (error) {
          console.error('Error updating password:', error);
          return res.status(500).json({ message: 'Password reset failed' });
        } else if (results.affectedRows === 0) {
          return res.status(404).json({ message: 'User not found' });
        } else {
          return res.status(200).json({ message: 'Password reset successful' });
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/forgotpw', async (req, res) => {
  const { email, newPassword, rePassword } = req.body;

  if (newPassword !== rePassword) {
    return res.status(400).json({ error: 'Mật khẩu không khớp' });
  }

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const sql = 'UPDATE CUSTOMER SET password = ? WHERE email = ?';

    connection.query(sql, [hashedPassword, email], (err, results) => {
      if (err) {
        console.error('Error updating password:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Không tìm thấy email!' });
      }

      return res.json({ message: 'Khôi phục mật khẩu thành công!' });
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/product`)
})

