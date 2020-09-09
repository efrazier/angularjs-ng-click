class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "AngularJSjjj";
    $scope.ga = function(){
      
      console.log("click");analyticsTrack("bob")
      
      };
  }
}

export default HomeCtrl;