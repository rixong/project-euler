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

/* function sumEvenFibs() {
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
 */
// 1,1,2,3,5,8,13,21,34,55 => 2 + 8 + 34 = 44, n=10

/* Problem: Largest Prime Factor
The prime factors of 13195 are 5, 7, 13 and 29. The largest prime factor in this case is 29.
What is the largest prime factor of the number 600851475143 ?
*/

/* 

while result 

*/

/* function largestPrime(n) {
  let result = n;
  for (let i = 2; i < result; i += 1) {
    while (result % i === 0 && result !== i) {
      result /= i;
    }
  }
  return result;
}

console.log(largestPrime(6857)); */

/* 
Largest Palindrome Product
Problem
What is the largest palindrome product of two three-digit numbers?

Background
A palindromic number reads the same both ways. 
For instance, 101 is a palindrome, as is 91,519 and 1,111.

For example, The largest palindrome made from the product of two two-digit numbers is 9009:

Pseudo Code:
n=number digits

Store max;

loop i 10 - 99
  inner loop j 10 - 99
    check if 1*j is palidrome:
      res to string
      split at midpoint
      reverse 2nd half and compare.
      if the same, convert back to int and compare wtih max, replacing if greater.


*/

/* function largestPalindromeProduct() {
  const max = {
    product: 0,
    i: 0,
    j: 0,
  };

  for (let i = 100; i < 1000; i += 1) {
    for (let j = 100; j < 1000; j += 1) {
      const prod = (i * j).toString();
      const firstHalf = prod.slice(0, Math.floor(prod.length / 2));
      const secondHalfReversed = prod.slice(Math.ceil(prod.length / 2)).split('').reverse().join('');
      if (firstHalf === secondHalfReversed && i * j > max.product) {
        // console.log(firstHalf, secondHalfReversed);
        max.product = prod;
        max.i = i;
        max.j = j;
      }
    }
  }
  return max;
}

console.log(largestPalindromeProduct());
 */

/* 
 
Problem: Smallest Multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
Instructions
Code your procedural solution into the lib/smallest_multiple.rb file.
Code your object-oriented solution into the lib/oo_smallest_multiple.rb file.
Run learn until you get all of the RSpec tests to pass.

Pseudo Code:
Smallest number possible needs to at least equal num.
Start with num;
Check if divisble by all numbers using recursive function:
  Base: product = 1 => return true
  Start from high to low - if number is not divisible by 20 goto to 20 -1, etc until you reach base;
  else return false

*/

function checkProducts(num, multiplier) {
  if (multiplier === 1) {
    return true;
  }
  if (num % multiplier === 0) {
    return checkProducts(num, multiplier - 1);
  }
  return false;
}

function smallestMultple(multiplier) {   ///@20 1040 ms  take 2 140ms
  const start = performance.now();
  let num = multiplier;
  let count = 1;
  while (true) {
    if (checkProducts(num, multiplier)) {
      console.log(performance.now() - start);
      return num;
    }
    num = multiplier * count;
    count += 1;
  }
}

console.log(smallestMultple(20));
