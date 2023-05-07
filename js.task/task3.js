// // make loop 
// let text = "mohammad ";

// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i ;
// }
// console.log(text)
// // 2 for loop
// const person = {fname:"John", lname:"Doe", age:25}; 

// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }
// console.log(txt)
// // for while loop 
// let text1 = "";
// let i = 0;
// while (i < 3) {
//   text1 += " The number is " + i;
//   i++;
// }
// console.log(text1)
// // function and how to make 
// function myFunction(p1, p2) {
//     return p1 ** p2;
//   }
//   document.getElementById("demo1").innerHTML = myFunction(4, 3);
// //   date and function
// const timeNow = new Date();
// console.log(timeNow); // shows current date and time
// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  


// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for(let i1 =1 ;i1 <=10;i1++){
    if(i1%2 !=0) continue;
    console.log(i1)
}


// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
let num = 1;

while (num <= 10) {
  if (num % 2 != 0) {
    console.log(num);
  }
  num++;
}
// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
let num1 = prompt("enter number")
for(let i3 = 1; i3 <= 10; i3++) {
    const result = num1 * i3;
    console.log(`${num1} x ${i3} = ${result}`);
}
// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let i4,  sum = 0
i4 = 1
while (i4<=100){
    sum= sum + i4;
   i4++;
}
console.log(sum)
//   6- Write a program that calculates the factorial of a number entered by the user using a for loop.
// let num3 = parseInt(prompt("Enter a number:"));
let num3 = prompt("enter ")
let factorial = 1;

for (let i = 1; i <= num3; i++) {
  factorial *= i;
}

console.log(factorial);



// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
// take user input for the limit
const limit = parseInt(prompt("Enter a limit: "));
let a = 0, b = 1;
console.log(a);
console.log(b);
while (a + b <= limit) {
    const c = a + b;
    console.log(c);
    a = b;
    b = c;
}


// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.
// initialize an array of numbers to be reversed
let num = 20 
while (num > 0) {
    console.log(num);
    num=num-5;
  }



