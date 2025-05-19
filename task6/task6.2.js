//2. Print fibbonaci series upto first 10 numbers.
let num =10;
let num1 = 0, num2 = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i = 1; i <= num; i++) {
    console.log(num1);
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}