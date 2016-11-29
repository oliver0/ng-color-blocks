colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");
  var self = this;
  self.newColor = {};
  self.colors = DataFactory;
  console.log(DataFactory);

  self.addColor = function(){
    self.colors.push(self.newColor.color);
    console.log(DataFactory);
  };

  self.deleteColor = function(color){
    var index = self.colors.indexOf(color);
    console.log(index);
    self.colors.splice(index, 1);
    console.log(self.colors);
  };

}]);
