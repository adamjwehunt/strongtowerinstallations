angular.module('strongtower', ['ui.router', 'ngAnimate', 'angular-owl-carousel-2', 'sticky', 'ezfb'])
.config(
  (
    $stateProvider,
    $urlRouterProvider,
    ezfbProvider
  ) => {
    ezfbProvider.setInitParams({
      appId: '902009893274771',
      version: 'v2.6'
    });

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
.run(
  (
    $rootScope,
    $location,
    $anchorScroll,
    $stateParams,
    $timeout,
    $window
  ) => {
  $rootScope.$on('$stateChangeSuccess', function(newRoute, oldRoute) {
    $timeout(function() {
      $location.hash($stateParams.scrollTo);
      $anchorScroll()
    }, 10)
  });

  $rootScope.isSmallViewport = $window.innerWidth < 767;
  $rootScope.updateWidth = function() {
    $rootScope.isSmallViewport = $window.innerWidth < 767;
  }

  $window.onresize = function() {
    $rootScope.updateWidth();
    $rootScope.$apply();
  }
})
