let express = require('express');
const app= express();
const mysql= require('mysql');
const cors= require('cors');
const bodyParser= require('body-parser');

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'ecommerce'
});
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

connection.connect( function (err){
    if (err){
        return console.error('error' + err.message)
    }
    console.log('Connected to the MySQL Server.')
});

connection.query('SELECT * FROM products', function(err, res, fields){
    if(err) throw err;
    console.log(res);
})

app.get('/api/get',(req,res)=>{
    connection.query('SELECT * FROM products', function(err, result, fields){
        res.send(result);
    })
})
app.listen(3001,()=>{console.log("server is running")});