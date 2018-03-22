angular.module('strongtower')
.controller('mainCtrl', function ($scope, $timeout, $state, $location, $anchorScroll) {

  // nav btns
  $scope.activeBtn = function (activeClass) {
    if ($state.current.name === activeClass) {
      return true
    }
  };
  $scope.activeBtn()

  //mobile btn
  $scope.menuState = 'collapsed'
  $scope.toggleNav = function () {
    let menuState = $scope.menuState
    $scope.menuState = 'collapsing';
    if (menuState === 'collapsed') {
      $scope.menuHeight = "'height' : '259px'"
    } else if (menuState === 'expanded') {
      $scope.menuHeight = "'height' : '1px'"        
    }

    $timeout(function () {
      if (menuState === 'collapsed') {
        menuState = 'expanded';
      } else  if (menuState === 'expanded') {
        menuState = 'collapsed';
      }
      $scope.menuState = menuState;
    }, 0)
  };

  // Owl Carousel
  $scope.owlitems = [];
  $scope.owlproperties = {
      items: 1,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplaySpeed: 800,
      dots: false,
      loop: true,
      nav: false,
      navText: ['<div class="btn-circle"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>','<div class="btn-circle"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>']
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
      autoWidth:true,
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
      navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
  };

  //Facebook Plugin
  $scope.pluginOn = true;
  $scope.rendering = false;

  $scope.rendered = function () {
    $scope.rendering = false;
  };

  $scope.$watch('pluginOn', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.rendering = true;
    }
  });

  $scope.$on('$routeChangeSuccess', function () {
    $scope.rendering = true;
  });

})
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=902009893274771";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'))
