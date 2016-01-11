var mongodb = require('mongodb');

//init fxn allows for reuse of db cxn.

module.exports.init = function(callback){
  var server = new mongodb.Server('localhost', 27017);
  var db = new mongodb.db('challenge2', server);
  db.open(function(error, db) {

    //export database.
    module.exports.db = db;
    module.exports.db = db.collection('bios');
    callback(error);
  });
};
