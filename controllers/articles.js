const Articles = require('../models/articles');

exports.all = function(req, res){
	Articles.all(function(err, docs){
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	})
}

exports.findById = function(req, res){
	Articles.findById(req.params.id, function(err, doc){
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	})
}

exports.create = function(req, res){
	var article = {
		title: req.body.title,
		text: req.body.text,
		date: req.body.date,
		hashtags: req.body.hashtags,
		picture: req.body.picture
	};
	Articles.create(article, function(err, result){
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(article);
	})
}

exports.update = function(req, res){
	Articles.update(req.params.id, {$set: {name: req.body.name}}, function(err, result){
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}

exports.delete = function(req, res){
	Articles.delete(req.params.id, function(err, result){
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}