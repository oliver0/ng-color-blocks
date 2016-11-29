colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  return colors;

}]);

// app.factory('DataFactory', function() {
//   console.log('Factory running');
//
//   // var currentBudget = 0;
//   // var message = "hello from the factory";
//
//   var publicApi = {
//     currentBudget: 0,
//     message: "Boo!",
//     doThing: function(thing) {
//       doAThing(thing);
//     }
//   };
//
//   return publicApi;
