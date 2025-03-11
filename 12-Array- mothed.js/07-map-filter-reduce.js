const number = [-2, -5, 3, 0, 5, 8, 10]
// count even and postivie numbers -> 2

let countPostiveEven = number.reduce((acc, cruu)=> {return curr >= 0 && curr %2 === 0 ? acc +1 : acc
}, 0)

console.log(countPostiveEven)


 const nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
  ];
  // sum of numbers of inner arrays : [6, 35, 300]


const result = nums.map((x)=> 
    return x.reduce((acc, curr)=> acc + curr , 0))


const words = ['hello', 'Tusedya', 'HEYY', 'apple']

//Find all that word that has 5 letters:['HELLO,'APPLE']

let WordsUpperCase = words.filter(word => word.length ===5). map(word => word.toUpperCase())
console.log(WordsUpperCase)

const result1 =[]

function  firstpos(arr){
    for(let i = 0 ; i < arr.length.i++){
        if(arr[i]>0){
            return arr[i]
        }
    }
        
}

console.log(firstPos([0, 3, -9,  5, 8]) )
console.log(firstPos([-2, 0, -7, 10, -5]) ) 
console.log(firstPos([1, 2, 3, -2]))     

/*
Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2
*/

function lastNeg(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] < 0) return arr[i];
    }
  }
  
  console.log(lastNeg([0, 3, -9, 5, 8]));  // Output: -9
  console.log(lastNeg([-2, 0, -7, 10, -5]));  // Output: -5
  console.log(lastNeg([1, 2, 3, -2]));  // Output: -2

  /*
  Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"
*/


function firstLongest(arr) {
    return arr.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    });
  }
  
  console.log(firstLongest(["red", "blue", "yellow", "white"]));  
  console.log(firstLongest(["Apple", "Banana", "Orange"]));  
  console.log(firstLongest(["purple", "yellow", "orange"]))

  /*
  Requirement:
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])          
*/

function min(arr){
    return Math.min(...arr)
}
console.log(min([0, 3,  5, 8]) )