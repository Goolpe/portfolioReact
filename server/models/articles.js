const db = require('../db');
const mongoose = require('mongoose'); 
const ObjectID = mongoose.Types.ObjectId;


exports.all = function(cb){
	db.get().collection('articles').find().toArray(function (err, docs) {
		cb(err,docs);
	});
}

exports.findById = function(id, cb){
	db.get().collection('articles').findOne({_id: ObjectID(id)}, function(err, doc) {
		cb(err, doc);
	});
}

exports.create = function(article, cb){
	db.get().collection('articles').insertOne(article, function(err, result){
		cb(err, result);
	});
}

exports.update = function(id, newData, cb){
	db.get().collection('articles').updateOne(
		{ _id: ObjectID(id)}, 
		newData, 
		function(err, result){
			cb(err, result);
	});
}

exports.delete = function(id, cb) {
	db.get().collection('articles').deleteOne(
		{ _id: ObjectID(id)}, 
		function(err, result){
			cb(err, result);
	});
}