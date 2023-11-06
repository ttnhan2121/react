const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
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
  'SELECT * FROM `test` LIMIT 100', (err, result) => {
    if(err){
      console.log(err)
      connection.end
      return
    }
    app.get('/testdb',(req,res) => {
      res.json(result)
    })
  },
  );
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

