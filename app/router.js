import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('search');
  this.route('login');
  this.route('admin', function() {
    this.route('profile');
    this.route('books', function() {
      this.route('new');
      this.route('list', { path: '/'} );
    });
    this.route('loans');
  });
});

export default Router;
