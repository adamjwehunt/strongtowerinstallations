angular.module('strongtower', ['ui.router', 'ngAnimate', 'angular-owl-carousel-2', 'sticky'])
.config(function ($stateProvider, $urlRouterProvider) {



$stateProvider
  .state('home', {
    url:'/',
    controller: 'mainCtrl',
    templateUrl: '../views/home.html'
  })

  .state('services', {
    url:'/services/:scrollTo',
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

.run(function($rootScope, $location, $anchorScroll, $stateParams, $timeout) {
  $rootScope.$on('$stateChangeSuccess', function(newRoute, oldRoute) {
    $timeout(function() {
      $location.hash($stateParams.scrollTo);
      $anchorScroll()
    }, 10)
  });
})
