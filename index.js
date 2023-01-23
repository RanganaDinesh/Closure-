// function counter(){
//     let counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// console.log(counter());//1
// console.log(counter());//2
// console.log(counter());//3
// console.log(counter());//4
// var count = 0;
// (function () {
//   if (count === 0) {
//     var count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// // })();
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

// "Print Output

// var a = 12;
// (function () {
//   console.log(a);
  
// })();

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//       console.log(
//         "outerArg = " + outerArg + "\n" +
//       "innerArg = " + innerArg + "\n" +
//        " outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);
// output:
// outerArg = 123
// innerArg = 456
//  outerVar = a
// innerVar = b
// globalVar = xyz

// "var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     console.log(a);
//   };
// })();
// x(); // output : 12 