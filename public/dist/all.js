'use strict';

angular.module('strongtower', ['ui.router', 'angular-owl-carousel-2', 'sticky']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    controller: 'mainCtrl',
    templateUrl: '../views/home.html'
  }).state('services', {
    url: '/services',
    controller: 'mainCtrl',
    templateUrl: '../views/services.html'
  }).state('about', {
    url: '/about',
    controller: 'mainCtrl',
    templateUrl: '../views/about.html'
  }).state('testimonials', {
    url: '/testimonials',
    controller: 'mainCtrl',
    templateUrl: '../views/testimonials.html'
  }).state('contact', {
    url: '/contact',
    controller: 'mainCtrl',
    templateUrl: '../views/contact.html'
  });

  $urlRouterProvider.otherwise('/');
}).run(function ($rootScope, $state, $document, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess', function () {
    $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
  });
});

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     center: true,
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 1000
//   });
// });

angular.module('strongtower').controller('mainCtrl', function ($scope, $timeout, $state) {

  // nav btns
  $scope.activeBtn = function (activeClass) {
    if ($state.current.name === activeClass) {
      return true;
    }
  };
  $scope.activeBtn();

  // Owl Carousel
  $scope.owlitems = [];
  $scope.owlproperties = {
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 800,
    dots: false,
    loop: true,
    nav: true,
    navText: ['<div class="btn-circle"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>', '<div class="btn-circle"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>']
  };

  $scope.owlpropertiesPartners = {
    center: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 900,
    dots: false,
    loop: true,
    nav: true,
    margin: 90,
    autoWidth: true,
    responsive: {
      768: {
        dots: true,
        items: 2,
        margin: 85
      },
      1200: {
        dots: true,
        items: 4,
        margin: 100
      }
    },
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
  };
});