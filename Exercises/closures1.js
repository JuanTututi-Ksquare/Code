// var a = 12;
// (function() {
//     console.log(a);
// })()

// var a = 5;
// (function () {
//   var a = 12;
//   console.log(a);
// })();

// var a = 10;
// var x = (function() {
//   var a = 12;
//   return (function() {
//     console.log(a);
//   });
// })();

// x();

function average() {
  let sum = 0;
  let counter = 0;
  return function modify(num) {
    sum += num;
    counter++;
    return sum / counter;
  };
}

const avg = average();
console.log(avg(10));
console.log(avg(11));
console.log(avg(12));
