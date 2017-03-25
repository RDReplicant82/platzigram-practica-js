var express = require('express');
var multer  = require('multer');
var ext     = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname));
  }
});

var upload = multer({ storage: storage }).single('picture');
var app    = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { title : 'Platzigram' });
});

app.get('/signup', function(req, res) {
  res.render('index', { title : 'Platzigram - SignUp' });
});

app.get('/signin', function(req, res) {
  res.render('index', { title : 'Platzigram - SignIn' });
});

app.get('/api/pictures', function(req, res) {
  var pictures = [
    {
      user : {
        username: 'RDReplicant82',
        avatar: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/12791050_10153940420593535_9220200540891822288_n.jpg?oh=fe3dcf8e5406a3e27c06e7db17cf73e9&oe=597367CE'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: +new Date()
    },
    {
      user : {
        username: 'RDReplicant82',
        avatar: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/12791050_10153940420593535_9220200540891822288_n.jpg?oh=fe3dcf8e5406a3e27c06e7db17cf73e9&oe=597367CE'
      },
      url: 'office.jpg',
      likes: 1,
      liked: true,
      createdAt: +new Date().setDate(new Date().getDate() - 10)
    }
  ];

  setTimeout(function() {
    res.send(pictures);
  }, 2000);

});

app.post('/api/pictures', function(req, res) {
  upload(req, res, function(err) {
    if(err) return res.send(500, 'Error uploading file');
    res.send('File uploaded successfully');
  });
});

app.listen(3000, function(err) {
  if(err) {
    return console.log('Err -> ', err), process.exit(1);
  } else {
    console.log('Platzigram escuchando en el puerto 3000');
  }
});
