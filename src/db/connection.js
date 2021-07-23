const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test123',
    database: 'master'
});

connection.connect((error) => {
    if (error) console.log(error)
    console.log('success')
});

module.exports = connection;