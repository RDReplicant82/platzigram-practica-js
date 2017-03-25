var page     = require('page');
var empty    = require('empty-element');
var template = require('./template');
var title    = require('title');
// var request  = require('superagent');
var header   = require('../header');
var request  = require('axios')

page('/', header, loadAsync , function(ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  empty(main).appendChild(template(ctx.pictures));
});

// Llamada asíncrona con async y await

async function loadAsync(ctx, next) {
  try {
    ctx.pictures = await fetch('/api/pictures').then(res => res.json());
    next();
  } catch(err) {
    console.log('err -> ', err);
  }
}

// Llamada de tipo ajax con superagent

// function loadPictures(ctx, next) {
//   request
//     .get('/api/pictures')
//     .end(function(err, res) {
//       if(err) return console.log('err -> ', err);
//       ctx.pictures = res.body;
//       next();
//     });
// }

// Llamada con promesas con axios

// function loadAxios(ctx, next) {
//   request
//     .get('/api/pictures')
//     .then(function(res) {
//       ctx.pictures = res.data;
//       next();
//     })
//     .catch(function(err) {
//       console.log('err -> ', err);
//     });
// }

// Llamada de tipo ajax con el interfaz nativo de los navegadores, fetch

// function loadFetch(ctx, next) {
//   fetch('/api/pictures')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(pictures) {
//     ctx.pictures = pictures;
//     next();
//   })
//   .catch(function(err) {
//     console.log('err -> ', err);
//   });
// }
