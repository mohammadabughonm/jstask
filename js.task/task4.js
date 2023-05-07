/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(jobTitle, location, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('software engineer', 'Jordan', 'Alice', 3);



/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function tellFortune1(age ) {
    var calculateDogAge = 'your doggie  is ' + age*7 + ' years old in dog years ' ;
  
    console.log(calculateDogAge);
}

tellFortune1(1);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
  }
  calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
    var hellomasge = 'hello ' + name  ;
  
    console.log(hellomasge);
}

greet("Adam");

/*
5
what is the error:
function double4(x) {
  return 2 * "cat";
}

function double5(x) {
  return 2 * 7;
}

function double6(7) {
  return 2 * x;
}
*/



/*
6
fix these functions:
function double1(x) {
  return 2 * x ;
}

function double2(x){
return 2 * x;
}

function  double3(x){
  return 2 * x;
}
*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x) {
    var numbercube = x ** 3 ;
  
    console.log(numbercube);
}

cube(4);


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x , Z) {
    var numbermultiply = x * Z ;
  
    console.log(numbermultiply);
}

multiply(3,4);
multiply(5,4);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(x) {
    if(x>=20 ){
        console.log("yes you can")
    }else{
        console.log("please come back after 3 years to get one")
    }

}

canIGetADrivingLicense(21);
canIGetADrivingLicense(17);
canIGetADrivingLicense(20);




/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(x ,z) {
    if(x.length==z.length &&z.length==x.length  ){
        console.log(true)
    }else{
        console.log(false)
    }

}
sameLength("tree","clue")
sameLength("tree","car")



/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(x ,z) {
    const maxnum =Math.max(x,z)
    console.log (maxnum)

}
largerNubmer(5,6)
largerNubmer(5,3)
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(x ,z,c) {
    const minnum =Math.min(x,z,c)
    console.log (minnum)

}
smallerNubmer(8,6,7)
smallerNubmer(5,99,34)
smallerNubmer(5,99,3)
smallerNubmer(5,3,3)

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1, str2, str3, str4, str5) {
    let shortest = str1;
  
    if (str2.length < shortest.length) {
      shortest = str2;
    }
  
    if (str3.length < shortest.length) {
      shortest = str3;
    }
  
    if (str4.length < shortest.length) {
      shortest = str4;
    }
  
    if (str5.length < shortest.length) {
      shortest = str5;
    }
  
    return shortest;
  }
  
// function shorterString(x ,z,c ,v,b) {
//     const shortstring =Math.min(x.length,z.length,c.length,v.length,b.length)
//     console.log (shortstring)

// }

const shortstr=shorterString("air","school","car","by","github");
console.log(shortstr);
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function largesstring(x ,z,c ,v,b) {
    const largesstring =Math.max(x.length,z.length,c.length,v.length,b.length)
    console.log (shortstring)

}
shorterString("air","school","car","by","github")
shorterString("air","tr","car","by","github")
shorterString("by","tr","car","air","github")
shorterString("air","tr","by","car","github")
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num) {
    if (num % 2 === 0) {
      console.log (true);
    } else {
      console.log (false);
    }
  }
  isEven(1)
  isEven(2)

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num) {
    if (num % 2 !== 0) {
      console.log (true);
    } else {
      console.log (false);
    }
  }
  isOdd(4)
  isOdd(5)

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(x){
    const absnum= Math.abs(x)
    console.log(absnum)
}
positive(4)
positive(-5)

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(x,z){
    var name  = x +" " +z
    console.log(name)

}
fullName("Adam","McCallen")
fullName("Alex", "Mercer")

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(z,x,c,v,b,v){
    const avenum = ((z+x+c+v+b+v)/average.length)
    console.log(avenum)
}
average(1,2,3,4,5,6)
average(5,7,9,3,5,6)


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(z,x) {
    let rendnum= Math.random(z,x)
    console.log(rendnum)
    
}
randomNumber()
randomNumber()
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(z,x) {
    let rendnumn= (Math.random()*(x-z+1))+z;
    console.log(rendnumn)
    
}
randomBetweenNumbers(1,8)
randomBetweenNumbers(3,100)

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
// function scoreInUniversity(score) {
//     if (score >= 95 && score <= 100) {
//       console.log ('A');
//     } else if (score >= 85 && score <= 94) {
//         console.log ('B');
//     } else if (score >= 70 && score <= 84) {
//         console.log('C');
//     } else if (score >= 50 && score <= 69) {
//         console.log ('D');
//     } else {
//         console.log('F');
//     }
//   }
//   scoreInUniversity(96)
//   scoreInUniversity(3)
//   scoreInUniversity(71)
function scoreInUniversity(score) {
    let grade;
    
    switch (true) {
      case (score >= 95 && score <= 100):
        grade = 'A';
        break;
      case (score >= 85 && score <= 94):
        grade = 'B';
        break;
      case (score >= 70 && score <= 84):
        grade = 'C';
        break;
      case (score >= 50 && score <= 69):
        grade = 'D';
        break;
      case (score >= 0 && score <= 49):
        grade = 'F';
        break;
      default:
        grade = 'Invalid score';
        break;
    }
    
    return grade;
  }
  const score1 = 80;
const score2 = 95;

console.log(scoreInUniversity(score1)); // "C"
console.log(scoreInUniversity(score2)); // "A"
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
function counter1() {
    let count = 0;
    
    return function() {
      return ++count;
    }
  }
  const nextNumber = counter1();

console.log(nextNumber()); 
console.log(nextNumber()); 
console.log(nextNumber()); 


  

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
let count = 0;

function counter() {
  count++;
  return count;
}

function resetCounter() {
  const currentCount = count;
  count = 0;
  return currentCount;
}


console.log(counter()); // output: 1
console.log(counter()); // output: 2
console.log(counter()); // output: 3

console.log(resetCounter()); // output: 3 and the counter reset now

console.log(counter()); // output: 1
console.log(counter()); // output: 2

console.log(resetCounter()); // output: 2 and the counter reset now

console.log(counter()); // output: 1