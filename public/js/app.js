angular.module('strongtower', ['ui.router', 'angular-owl-carousel-2', 'sticky'])
.config(function ($stateProvider, $urlRouterProvider) {


$stateProvider
  .state('home', {
    url:'/',
    controller: 'mainCtrl',
    templateUrl: '../views/home.html'
  })

  .state('services', {
    url:'/services',
    controller: 'mainCtrl',
    templateUrl: '../views/services.html'
  })

  .state('about', {
    url:'/about',
    controller: 'mainCtrl',
    templateUrl: '../views/about.html'
  })

  .state('testimonials', {
    url:'/testimonials',
    controller: 'mainCtrl',
    templateUrl: '../views/testimonials.html'
  })

  .state('contact', {
    url:'/contact',
    controller: 'mainCtrl',
    templateUrl: '../views/contact.html'
  })


  $urlRouterProvider
    .otherwise('/')

})