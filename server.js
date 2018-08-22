const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db');
const MongoClient = require ('mongodb').MongoClient;
const mongoose = require('mongoose');
const articlesController = require('./controllers/articles');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/articles', articlesController.all);
app.get('/articles/:id', articlesController.findById);
app.post('/articles', articlesController.create);
app.put('/articles/:id', articlesController.update);
app.delete('/articles/:id', articlesController.delete);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const dbConnUrl = process.env.MONGOLAB_URI || 'mongodb://@localhost:28017/articles'

db.connect(dbConnUrl, function (err){
	if (err){
		return console.log(err);
	}
	app.listen(port, () => console.log(`Listening on port ${port}`));
});
