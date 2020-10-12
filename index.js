/*
Multiples of 3 and 5
Find the sum of all the multiples of 3 or 5 below 1000
*/

/* let result = 0;

for (let i = 1; i < 15; i += 1) {
  if (i % 3 === 0 || i % 5 === 0) {
    result += i;
  }
}

console.log(result); */

/* Fibonacci challenge
By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
find the sum of the even-valued terms.
 */

function sumEvenFibs(n) {
  let result = 0;
  const arr = [1, 1];
  let count = 2;
  while (count < n) {
    const total = arr[count - 1] + arr[count - 2];
    if (total % 2 === 0) {
      result += total;
    }
    arr.push(total);
    count += 1;
  }
  return `The sum of the first '${n} Fibonacci numbers is ${result}`;
}

console.log(sumEvenFibs(10));

// 1,1,2,3,5,8,13,21,34,55 => 2 + 8 + 34 = 44, n=10
