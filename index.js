var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

// URL to the database mongodb which is on Heroku via an add-on
var url = 'mongodb://heroku_d876vxht:2k54mr8shabd6pmhfgjaicj8jg@ds019976.mlab.com:19976/heroku_d876vxht';

// Define routes that Angular could use to speak with database (API)
// Save the client ip address and the time in database
app.get('/api/request', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      res.status(500).send('Cannot connect to database');
      return;
    } else {
      console.log('Connection established to', url);

      // Data to save in db 
      var request = {
        ipClient: (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress,
        time: new Date()
      };

      // Save data
      db.collection('request').insert(request, function (err, result) {
        if (err) {
          res.status(500).send('Cannot insert data');
          return;
        }

        res.send(result);

        // Close database connection
        db.close();
      });
    }
  });
});

// GET the number of document in the request collection
app.get('/api/request/count', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      res.status(500).send('Cannot connect to database');
      return;
    } else {
      console.log('Connection established to', url);

      // Count the number of document in request collection
      db.collection('request').count(function (err, count) {
        res.send({ count: count });
      });

      // Close connection
      db.close();
    }
  });
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
