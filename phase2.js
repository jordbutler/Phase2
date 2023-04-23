const { MongoClient } = require("mongodb");

// The uri string must be the connection string for the database (obtained on Atlas).
const uri = "mongodb+srv://w0708515:KvvngAcid253@jbdb.wr4nvvi.mongodb.net/?retryWrites=true&w=majority";

// --- This is the standard stuff to get it to work on the browser
const express = require('express');
const app = express();
const port = 3000;
app.listen(port);
console.log('Server started at http://localhost:' + port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  const myquery = req.query;
  var outstring = 'Starting... ';
  res.send(outstring);
});

MongoClient.connect(uri).then(client => {
  // ...
  const db = client.db('jbdb')
  const quotesCollection = db.collection('cmps415mongodb')
  
  app.get('/', (req, res) => {
  const cursor = db.collection('quotes').find()
  console.log(cursor)
  
})

 
})
