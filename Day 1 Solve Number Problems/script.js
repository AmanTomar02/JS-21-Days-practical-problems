// Print all numbers divisible by both 3 and 5 (i.e., 15) up to N
// Input: 30
// Output: 15 30

console.time();

const N = 30;
const results = [];
for (let i = 1; i <= N; i++) {
  if (i % 15 === 0) results.push(i);
}
console.log(results.join(" "));
console.timeEnd();
