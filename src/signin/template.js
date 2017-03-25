var yo        = require('yo-yo');
var landing   = require('../landing');
var translate = require('../translate');

var signInForm = yo`<div class="col s12 m7">
          <div class="row">
            <div class="signup-box">
              <h1 class="platzigram">Platzigram</h1>
              <form class="signup-form">
                <div class="section">
                  <a class="btn btn-fb hide-on-small-only">${ translate.message('signup.facebook') }</a>
                  <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i> ${ translate.message('signin') }</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                  <input type="text" name="username" placeholder="${ translate.message('username') }">
                  <input type="password" name="password" placeholder="${ translate.message('password') }">
                  <button type="submit" class=" btn-signup btn waves-effecr waves-light">${ translate.message('signin') }</button>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="login-box">
              <span>${ translate.message('signin.not-have-account') } </span> <a href="signup">${ translate.message('signup.call-to-action') }</a>
            </div>
          </div>
        </div>`;

module.exports = landing(signInForm);
