const { Client } = require('pg');


const client = new Client({
  host: 'localhost',  
  port: 5432,         
  database: 'FireForesight', 
  user: 'postgres',   
  password: 'assma'   
});

client.connect()
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch(err => {
    console.error("Error connecting to the database:", err);
  });


module.exports = client;
