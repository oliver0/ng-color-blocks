colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");
  var self = this;
  self.newColor = {};
  self.colors = DataFactory;

  self.addColor = function(){
    self.colors.push(self.newColor.color);
  };

}]);
