// 1-Write a function to find the largest element in an array.
// function findLargestElement(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       return null;
//     }
  
//     let largestElement = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largestElement) {
//         largestElement = arr[i];
//       }
//     }
  
//     return largestElement;
//   }
//   const myArray = [3, 7, 1, 9, 5];
// const largestElement = findLargestElement(myArray);
// console.log(largestElement); // Output: 9

  

// 2-Write a function to find the smallest element in an array.
// function findLargestElement(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       return null;
//     }
  
//     let largestElement = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < largestElement) {
//         largestElement = arr[i];
//       }
//     }
  
//     return largestElement;
//   }
//   const myArray = [3, 7, 1, 9, 5];
// const largestElement = findLargestElement(myArray);
// console.log(largestElement); // Output: 9


// 3-Write a function to find the sum of all elements in an array.
// function sumArrayElements(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       return null;
//     }
  
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
  
//     return sum;
//   }
//   const myArray = [3, 7, 1, 9, 5];
// const sum = sumArrayElements(myArray);
// console.log(sum); // Output: 25

// 4-Write a function to find the average of all elements in an array.
// function averageArrayElements(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       return null;
//     }
  
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
  
//     const avg = sum / arr.length;
//     return avg;
//   }
//   const myArray = [3, 7, 1, 9, 5];
// const avg = averageArrayElements(myArray);
// console.log(avg); // Output: 5
// 5-Write a function to find the median of all elements in an array.
// function medianArrayElements(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       return null;
//     }
  
//     arr.sort(function(a, b) {
//       return a - b;
//     });
  
//     const mid = Math.floor(arr.length / 2);
  
//     if (arr.length % 2 === 0) {
//       return (arr[mid - 1] + arr[mid]) / 2;
//     } else {
//       return arr[mid];
//     }
//   }
//   const myArray = [3, 7, 1, 9, 5];
// const median = medianArrayElements(myArray);
// console.log(median); // Output: 5

  
// 6-Write a function to remove all duplicates from an array.
// function removeDuplicates(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       return null;
//     }
  
//     const uniqueArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (uniqueArray.indexOf(arr[i]) === -1) {
//         uniqueArray.push(arr[i]);
//       }
//     }
  
//     return uniqueArray;
//   }
//   const myArray = [3, 7, 1, 9, 5, 1, 7];
// const uniqueArray = removeDuplicates(myArray);
// console.log(uniqueArray); // Output: [3, 7, 1, 9, 5]
// 7-Write a function to sort an array in ascending order.
function sortAscending(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null;
    }
  
    arr.sort(function(a, b) {
      return a - b;
    });
  
    return arr;
  }
  const myArray = [3, 7, 1, 9, 5];
const sortedArray = sortAscending(myArray);
console.log(sortedArray); // Output: [1, 3, 5, 7, 9]

// 8-Write a function to sort an array in descending order.

// 9-Write a function to shuffle the elements of an array randomly.
// function shuffleArray(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       return null;
//     }
  
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
  
//     return arr;
//   }
//   const myArray = [3, 7, 1, 9, 5];
// const shuffledArray = shuffleArray(myArray);
// console.log(shuffledArray); // Output: [1, 9, 3, 7, 5] (random order)
