const {
    createPool 
} = require('mysql');

const pool = createPool ({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "covid",
    connectionLimit: 10
})

pool.query(`SELECT * FROM provinces`, (err, result, field) => {
    if(err) {
        return console.log(err);
    } 
    return console.log(result)
})

module.exports = pool

















// let mysql = require('mysql');
// let connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "api_db"
// })

// connection.connect((error) => {
//     if (!!error) {
//         console.log(error);
//     } else {
//         console.log("Connceted .....................................");
//     }
// })

// module.exports = connection;