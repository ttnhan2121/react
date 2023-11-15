const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const path = require('path')
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
      alert("Email này đã được đăng ký!")
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
      alert("Người dùng không tồn tại!")
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      alert("Mật khẩu không chính xác")
    }

    res.status(200).json({ message: 'Đăng nhập thành công' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi server' });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/product`)
})

