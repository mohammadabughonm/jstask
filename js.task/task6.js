console.log('Here is : ', 'array')




1
// Correct the syntax error
 let n= [ 1, 9, 45, ];

 let q=["Str", "alex","moh"];

let e=['the','fox', 'over', 'lazy', 'dog'  ];




/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
// console.log("q2")
// let fruits=["Tomato","Banana","Watermelon"];
// console.log(fruits.indexOf("Banana"));
// console.log(fruits.indexOf("Tomato"));

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// let food =["mansaf","pasta","maqlupa","mskan","mashrome soup"]
// let sport=["socers","amircan football","baskball"]
// let movie=["breking bad","get out","screem",""]


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// console.log("q4")
//  function firstOfArray(array){
//     return array[0];
//  }
//  console.log(firstOfArray([1,4,5]));
//  console.log(firstOfArray(["t","u","g","x"]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// console.log("q5")
// const lastOfArray = (array) => {
//     return array[array.length - 1];
//   }
  
//   console.log(lastOfArray([1, 4, 5])); 
//   console.log(lastOfArray(["t", "u", "g", "x"])); 
  
/*

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
console.log("q6")
var array = [0, 5, 7, 9];
console.log(array); // Output: [0, 5, 7, 9]

array.shift();
console.log(array); // Output: [5, 7, 9]

array.pop();
console.log(array); // Output: [5, 7]

array.unshift(4, 3, 1);
console.log(array); // Output: [1, 3, 4, 5, 7]

array.push(8, 9, 10);
console.log(array); // Output: [1, 3, 4, 5, 7, 8, 9, 10]


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// console.log("q7")
// var array2 = [5, 9, -7, 3.5];
// console.log(array2); // Output: [5, 9, -7, 3.5]

// // Use shift() method to remove the first element
// const shiftedValue = array2.shift();
// console.log(shiftedValue); // Output: 5
// console.log(array2); // Output: [9, -7, 3.5]

// // Use pop() method to remove the last element
// const poppedValue = array2.pop();
// console.log(poppedValue); // Output: 3.5
// console.log(array2); // Output: [9, -7]

// // Use unshift() method to add elements to the beginning of the array
// const unshiftedLength = array2.unshift(-3, 1, 6);
// console.log(unshiftedLength); // Output: 5
// console.log(array2); // Output: [-3, 1, 6, 9, -7]

// // Use push() method to add elements to the end of the array
// const pushedLength = array2.push(4, 2.5);
// console.log(pushedLength); // Output: 7
// console.log(array2); // Output: [-3, 1, 6, 9, -7, 4, 2.5]


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
console.log("q8")
function middleOfArray(arr) {
    const middleIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      // array has even number of elements
      return [arr[middleIndex - 1], arr[middleIndex]];
    } else {
      // array has odd number of elements
      return arr[middleIndex];
    }
  }
  console.log(middleOfArray([1,4,5]));
  console.log(middleOfArray(["t","u","g","x"]));    

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals.splice(1, 2, 'elephant');
console.log(animals); // Output: ['zebra', 'elephant']
var nums = [1, 2, 3, 8, 9];
nums.splice(0, nums.length, 5, -22, 3.5, 44, 98, 44);
console.log(nums); // Output: [5, -22, 3.5, 44, 98, 44]



/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr, index) {
    return arr[index];
  }
  var nums = [1, 2, 3, 8, 9];

  console.log(indexOfArray(nums, 3)); // Output: 8
  console.log(indexOfArray(nums, 1)); // Output: 2
  console.log(indexOfArray(nums, 4)); // Output: 9
    

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr) {
    return arr.slice(0, -1);
  }
  
  
  console.log(arrayExceptLast([1, 2, 3, 8, 9])); // Output: [1, 2, 3, 8]
  
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr, value) {
    arr.pop(value);
    arr.push(value);
    return arr;
  }
  var nums = [1, 2, 3, 8, 9];
  var result = addToEnd(nums, 55);
  console.log(result); // Output: [1, 2, 3, 8, 9, 55]
    


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  var nums = [1, 2, 3, 8, 9];
var result = sumArray(nums);
console.log(result); // Output: 23
// whill loop---------------------------------------------------------------------
function sumArray(arr) {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
      sum += arr[i];
      i++;
    }
    return sum;
  }
  var nums = [1, 2, 3, 8, 9];
  var result = sumArray(nums);
  console.log(result); // Output: 23
    

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  
  const nums = [1, 2, 3, 8, 9];
  console.log(minInArray(nums)); // output: 1
//   while loop 
  function minInArray(arr) {
    let min = arr[0];
    let i = 1;
    while(i < arr.length) {
      if(arr[i] < min) {
        min = arr[i];
      }
      i++;
    }
    return min;
  }
  
  // example usage:
  const nums = [1, 2, 3, 8, 9];
  console.log(minInArray(nums)); // output: 1
  
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        arr.splice(i, 1);
        // i--;
      }
    }
    return arr;
  }
var nums= [1,2,3,8,9]
console.log(removeFromArray(nums,8)); 
//   while loop-----------------------------------
function removeFromArray(arr, elem) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === elem) {
        arr.splice(i, 1); // remove element at index i
      } else {
        i++;
      }
    }
    return arr;
  }
  var nums= [1,2,3,8,9]
  console.log(removeFromArray(nums,8));  

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr) {
    const oddArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddArr.push(arr[i]);
      }
    }
    return oddArr;
  }
//   while loop
function oddArray(arr) {
    let i = 0;
    const result = [];
  
    while (i < arr.length) {
      if (arr[i] % 2 !== 0) {
        result.push(arr[i]);
      }
      i++;
    }
  
    return result;
  }
  
  const nums = [1, 2, 3, 8, 9];
  console.log(oddArray(nums)); // [1, 3, 9]
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  let nums = [1, 2, 3, 8, 9];
console.log(aveArray(nums)); // Output: 4.6
// whhile loop
function aveArray(arr) {
    let sum = 0;
    let count = 0;
    let i = 0;
    
    while (i < arr.length) {
      sum += arr[i];
      count++;
      i++;
    }
    
    return sum / count;
  }
  

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr) {
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      }
    }
    return shortest;
  }
  const strings = ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(shorterInArray(strings)); // "alex"
// while loop
function shorterInArray(arr) {
    let i = 0;
    let shortest = arr[0];
    while (i < arr.length) {
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      }
      i++;
    }
    return shortest;
  }
  
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
// while loop 
function repeatChar(str, char) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
      if (str[i] === char) {
        count++;
      }
      i++;
    }
    return count;
  }
  var string= "alex mercer madrasa rashed2 emad hala";
  console.log(repeatChar(string,"a"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i].length % 2 !== 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
// while loop 
function evenIndexOddLength(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
      if (i % 2 === 0 && arr[i].length % 2 !== 0) {
        result.push(arr[i]);
      }
      i++;
    }
    return result;
  }
console.log(evenIndexOddLength(["alex","madrasa","mercer","emad","rashed2","hala"]))  

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(Math.pow(arr[i], i));
    }
    return result;
  }
// while loop   
function powerElementIndex(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(Math.pow(arr[i], i));
    }
    return result;
  }
 console.log(powerElementIndex([44, 5, 4, 3, 2, 10])) 

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i += 2) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
 
//  while loop  
function evenNumberEvenIndex(arr) {
    var result = [];
    var i = 0;
    while (i < arr.length) {
      if (i % 2 === 0 && arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
      i++;
    }
    return result;
  }
  
  console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]))
  // new TextTrackList
  // let y=10
  // let x=5
  // y =y-x
  // x=y-x
  // y=y-x
  // console.log(y);
  // console.log(x);
  function leftright(num) {

    let d = num.toString();
    let mid = Math.floor(d.length / 2);

    for (let i = 0; i < mid; i++) {
      if (d[i ]!== d[d.length - 1 - i]) {
        return false;
      }
    }

    return true;
  }
  
  console.log(leftright([1,1,2,2,0,0,2,2,1,1 ]));
  console.log(leftright([0,0,2,2,4,4,0]));
  console.log(leftright([1,1,2,2,0,0,2,2,1,1 ]));
  console.log(leftright([1,1,2,2,5,5,6  ]));

// this  a new slide 
function isEqualFromLeftToRight(arr) {
  const n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[n - i - 1]) {
      return false;
    }
  }
  return true;
}

const myArray = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(isEqualFromLeftToRight(myArray));

  

  