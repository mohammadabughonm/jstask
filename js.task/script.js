// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// let x = 5;
// let y = 5;
// let z = 6;

document.getElementById("demo").innerHTML =
(x == y) + "<br>" + (x == z);
/// array 
const cars = ["hounda","Saab","Volvo","BMW"];

document.getElementById("demo1").innerHTML = cars[3];
// demo 3objects
const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 20,
    eyeColor  : "blue"
  };
  
  document.getElementById("demo2").innerHTML =
  person.firstName + " is " + person.age + " years old.";
  //
  document.getElementById("demo3").innerHTML = 
typeof 10 + "<br>" +
typeof "John" + "<br>" + 
typeof "John Doe";

// 4 Ways to Declare a JavaScript Variable:
// Using var
// Using let
// Using const
// Using nothing
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo4").innerHTML =
"The value of z is: " + z;
// Synonyms:

// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax



// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()