const mysql = require('mysql2');

var config =
{   
    user: 'admininstance',
    password: 'None#4712',
    database : 'YOUNES18young',
    host: 'dbtestinstance.czuww2abjk2v.us-east-1.rds.amazonaws.com', 
    port : '3306',   // don't add tcp & port number
 
    
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
           //queryDatabase();
    }   
});

/*var express    = require("express");
var mysql2      = require('mysql');
var connection = mysql2.createConnection({
  host     : 't2b-svr-sql-dev.database.windows.net',
 port      :  '1433',
  user     : 't2b_Admin@t2b-svr-sql-dev',
  password : 'None#4712',
  database : 'API_TestDB'

});
var app = express();

connection.connect(function(err){

if(!err) {
    console.log("Database is connected ... ");    

} else {
    console.log("Error connecting database ... ");   
    console.log(err); 
}
});*/

function queryDatabase(){
       conn.query('DROP TABLE IF EXISTS inventory;', function (err, results, fields) { 
            if (err) throw err; 
            console.log('Dropped inventory table if existed.');
        })
       conn.query('CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);', 
            function (err, results, fields) {
                if (err) throw err;
            console.log('Created inventory table.');
        })
       conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['banana', 150], 
            function (err, results, fields) {
                if (err) throw err;
            else console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
       conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['orange', 154], 
            function (err, results, fields) {
                if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
       conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['apple', 100], 
        function (err, results, fields) {
                if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
       conn.end(function (err) { 
        if (err) throw err;
        else  console.log('Done.') 
        });
};