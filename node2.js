var server = require('./server');
var sql = require('mssql');

var sqlConfigAZURE = {
  user: 't2b_Admin',
  password: 'None#4712',
  database : 'API_TestDB',
  server: 't2b-svr-sql-dev.database.windows.net', 
 // port : 3306,   // don't add tcp & port number
  options: {
    encrypt: true
  }
};
var sqlConfigAWS = {
  user: 'admininstance',
  password: 'None#4712',
  database : 'API_TestDB',
  server: 'dbinstance.czuww2abjk2v.us-east-1.rds.amazonaws.com', 
 // port : 3306,   // don't add tcp & port number
  options: {
    encrypt: true
  }
};

/*(async function () {
              try {
                console.log("sql connecting......")
               let pool = await sql.connect(sqlConfigAWS)
                let result = await pool.request()
                  .query("select * from Persons")  // subject is my database table name

                console.log(result )
                pool.close();
   // process.exit(1);
              } catch (err) {
                throw err;

              }
            })()*/

var onstart = function(node) {

   /*  new sql.ConnectionPool(sqlConfigAWS).connect().then(pool => {
                  return pool.request().query("select * from Persons")
                  }).then(result => {
                    console.log('Connected');
                    let rows = result.recordset
                    res.setHeader('Access-Control-Allow-Origin', '*')
                    res.status(200).json(rows);
                    sql.close();
                  }).catch(err => {
                    throw err;
                    //console.log(err)
                   // res.status(500).send({ message: "${err}"})
                    sql.close();
                  });*/


    receiveNewNode(9000);
}

function receiveNewNode(port){
    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();
    app.use(bodyParser.urlencoded({ extended: true })); 
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(function(request, response, next) {
      response.header("Access-Control-Allow-Origin", "*");
      response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    
   

    app.all('/getAllAWS', function(req, res) {

           var sql = require('mssql');
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            console.log('Received request');

       
                response='SUCCESS';

                new sql.ConnectionPool(sqlConfigAWS).connect().then(pool => {
                  return pool.request().query("select * from Persons")
                  }).then(result => {
                    let rows = result.recordset
                    res.setHeader('Access-Control-Allow-Origin', '*')
                    res.status(200).json(rows);
                    sql.close();
                  }).catch(err => {
                    res.status(500).send({ message: "${err}"})
                    sql.close();
                  });
               


             //   res.send({'response' : response });
         
    });

    app.all('/getLastNameAWS', function(req, res) {

           var sql = require('mssql');
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            console.log('Received request');

       
                response='SUCCESS';

                new sql.ConnectionPool(sqlConfigAWS).connect().then(pool => {
                  return pool.request().query("select * from Persons where LastName = "+''+req.body.param+'')
                  }).then(result => {
                    let rows = result.recordset
                    res.setHeader('Access-Control-Allow-Origin', '*')
                    res.status(200).json(rows);
                    sql.close();
                  }).catch(err => {
                    throw err;
                    res.status(500).send({ message: "${err}"})
                    sql.close();
                  });
               


             //   res.send({'response' : response });
         
    });

    app.all('/getIDAWS', function(req, res) {

           var sql = require('mssql');
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            console.log('Received request');

       
                response='SUCCESS';

                new sql.ConnectionPool(sqlConfigAWS).connect().then(pool => {
                  return pool.request().query("select * from Persons where PersonID = "+req.body.param)
                  }).then(result => {
                    let rows = result.recordset
                    res.setHeader('Access-Control-Allow-Origin', '*')
                    res.status(200).json(rows);
                    sql.close();
                  }).catch(err => {
                    res.status(500).send({ message: "${err}"})
                    sql.close();
                  });
               


             //   res.send({'response' : response });
         
    });

    app.all('/getAllAZURE', function(req, res) {

           var sql = require('mssql');
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            console.log('Received request');

       
                response='SUCCESS';

                new sql.ConnectionPool(sqlConfigAZURE).connect().then(pool => {
                  return pool.request().query("select * from Persons")
                  }).then(result => {
                    let rows = result.recordset
                    res.setHeader('Access-Control-Allow-Origin', '*')
                    res.status(200).json(rows);
                    sql.close();
                  }).catch(err => {
                    res.status(500).send({ message: "${err}"})
                    sql.close();
                  });
               


             //   res.send({'response' : response });
         
    });

    app.all('/getLastNameAZURE', function(req, res) {

           var sql = require('mssql');
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            console.log('Received request');

       
                response='SUCCESS';

                new sql.ConnectionPool(sqlConfigAZURE).connect().then(pool => {
                  return pool.request().query("select * from Persons where LastName = "+''+req.body.param+'')
                  }).then(result => {
                    let rows = result.recordset
                    res.setHeader('Access-Control-Allow-Origin', '*')
                    res.status(200).json(rows);
                    sql.close();
                  }).catch(err => {
                    throw err;
                    res.status(500).send({ message: "${err}"})
                    sql.close();
                  });
               


             //   res.send({'response' : response });
         
    });

    app.all('/getIDAZURE', function(req, res) {

           var sql = require('mssql');
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            console.log('Received request');

       
                response='SUCCESS';

                new sql.ConnectionPool(sqlConfigAZURE).connect().then(pool => {
                  return pool.request().query("select * from Persons where PersonID = "+req.body.param)
                  }).then(result => {
                    let rows = result.recordset
                    res.setHeader('Access-Control-Allow-Origin', '*')
                    res.status(200).json(rows);
                    sql.close();
                  }).catch(err => {
                    res.status(500).send({ message: "${err}"})
                    sql.close();
                  });
               


             //   res.send({'response' : response });
         
    });
/*
    app.use(function (req, res, next) {

        req.sql = tediousExpress(connection);

        next();

    });

    app.get('/Persons', function (req, res) {

     req.sql("select * from Persons for json path")
         .into(res);

    });*/


     app.listen(port, function() {
    });
}

server.start({
    onstart: onstart,
    join: {
        address: 'localhost',
        port: 8000
    }
});


