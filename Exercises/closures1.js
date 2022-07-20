var a = 12;
(function() {
    console.log(a);
})()

var a = 5;
(function () {
  var a = 12;
  console.log(a);
})();


var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    console.log(a);
  });
})();

x();