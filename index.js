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

function sumEvenFibs() {
  let result = 2;
  const arr = [1, 2];
  let count = 2;
  // const max = 4e6;
  const max = 55;
  while (arr[count - 1] < max) {
    const total = arr[count - 1] + arr[count - 2];
    if (total % 2 === 0) {
      result += total;
    }
    arr.push(total);
    count += 1;
  }
  return `The sum of the even Fibonacci numbers up to ${arr[count-1]} is ${result}`;
}

console.log(sumEvenFibs());

// 1,1,2,3,5,8,13,21,34,55 => 2 + 8 + 34 = 44, n=10
