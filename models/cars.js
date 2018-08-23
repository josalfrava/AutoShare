const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Josito009',
    database: 'appdb_cs'
});

let carModel = {};

carModel.getCars = (callback) => {
    if(connection){
        connection.query('SELECT * FROM car', (err, rows) => {
            if(err){
                throw err;
            }
            else{
                callback(null, rows)
            }
        })
    }
};

module.exports = carModel;