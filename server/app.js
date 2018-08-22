const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cors = require('cors')
const bodyParser = require ('body-parser');
const MongoClient = require ('mongodb').MongoClient;
const mongoose = require('mongoose'); 
const ObjectID = mongoose.Types.ObjectId;
const db = require('./db');
const articlesController = require('./controllers/articles');

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));


// app.get('/articles', articlesController.all);
// app.get('/articles/:id', articlesController.findById);
// app.post('/articles', articlesController.create);
// app.put('/articles/:id', articlesController.update);
// app.delete('/articles/:id', articlesController.delete);


// db.connect('mongodb://@localhost:27017/articles', function (err){
// 	if (err){
// 		return console.log(err);
// 	}
// 	app.listen(3333, function(){
// 		console.log('server good')
// 	})

// })



const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
