const arr = [
  { id: 1, count: 0 },
  { id: 2, count: 2 },
  { id: 3, count: 0 },
  { id: 4, count: 2 },
  { id: 5, count: 0 },
  { id: 6, count: 2 },
  { id: 7, count: 0 },
  { id: 8, count: 0 },
  { id: 9, count: 0 },
  { id: 10, count: 0 }
];

const result = arr.filter(el => el.count === 0);
const element = result[Math.floor(Math.random() * Math.floor(result.length))];

console.log(result);
console.log(element);
