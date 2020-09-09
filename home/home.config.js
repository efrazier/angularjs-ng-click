function HomeConfig($stateProvider,$urlRouterProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html'
  });

};

export default HomeConfig;