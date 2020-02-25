// const add = a => {
//   let currentSum = a;
//   return function(b) {
//     currentSum += b;
//     return currentSum;
//   };
// };
//
// add(1)(2);
// // console.log(add(1)(2));
// console.log((2 == '2') == 2);
//

//
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// const newArr = [];
// arr.forEach((el, i) => {
//   newArr.push(el[0], el[1]);
// });
// console.log(newArr);

// function* generator() {
//   console.log('Hello');
//   yield 'Yield 1 Ran...';
//   console.log('World');
//   yield 'Yield 2 Ran...';
//   return 'Returned';
// }
//
// const g = generator();
// // console.log(g.next().value);
// // console.log(g.next());
// // console.log(g.next());
//
// for (let val of g) {
//   console.log(val);
// }

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let k of iter(6)) {
  console.log(k);
}
