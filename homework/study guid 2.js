/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if invoked.
Examples:
doubleOrTripleWord("Tech")  
doubleOrTripleWord("Apple") 
doubleOrTripleWord("") d
oubleOrTripleWord(" ") 
doubleOrTripleWord("1") 
doubleOrTripleWord("22")
 
*/


const doubleOrTripleWord= (string)=> string.trim().split(" ")[0].repeat(3)
 console.log(doubleOrTripleWord("Tech"));  
 console.log(doubleOrTripleWord("Apple")); 
 console.log(doubleOrTripleWord("")); 


/*
First and Last Word
 Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript” 
irstLastWord("Hello") -> "HelloHello"
firstLastWord("")    -> ""
firstLastWord(" ")    -> ""
 
*/
const firstlastWord = (string) => string.trim().split(" ").at(0) +string.trim().split(" ").at(-1)

console.log(firstlastWord("Hello World"));          
console.log(firstlastWord("I like JavaScript"));    
console.log(firstlastWord("Hello"));                 
console.log(firstlastWord(" "));  



/*
Has Vowel
")
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")     -> false 
hasVowel("Javascript") -> true 
hasVowel("Tech Global") -> true 
 hasVowel("1234")  -> false 
 hasVowel("ABC") -> true 

*/
const hasVowel =( string) => /[aeoui]/i.test(string)

console.log(hasVowel("Tech Global"))
console.log(hasVowel(""))
console.log( hasVowel("Javascript"))
console.log( hasVowel("Tech Global"))
console.log( hasVowel("1234"))
console.log( hasVowel("ABC"))




/*
START Vowel 
Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
Examples:
startVowel("Hello") 
startVowel("Apple") s
tartVowel("orange") 
startVowel("") 
startVowel(" ") 
startVowel("123")
-> false -> true -> true
-> false -> false

*/
const startVowel = (string) => /^[aeouiAEOUI]/.test(string)

console.log(startVowel("Hello"))
console.log(startVowel("Apple"))
console.log(startVowel("orange") )
console.log(startVowel("") )
console.log(startVowel(" ")) 
console.log(startVowel("123"))


/*
Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers.
Examples:
averageOfEdges(0, 0, 0) -> 0 
averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)-> 15

*/
const averageOfEdges = (num1, num2, num3)=>
(Math.min(num1, num2, num3) + Math.max(num1, num2, num3))/2

console.log(averageOfEdges(0, 0, 0)) 
 console.log(averageOfEdges(0, 0, 6)) 
console.log(averageOfEdges(-2, -2, 10)) 
console.log(averageOfEdges(-3, 15, -3)) 
console.log(averageOfEdges(10, 13, 20))




/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> "" 
replaceFirstLast(" A ")-> ""

*/
const replaceFirstLast = (string) =>  string.trim().length < 2 ? "" : string.trim().split(" ").at(-1) + string.trim().slice(1, -1) +string.trim().at(0)

console.log(replaceFirstLast("Hello World"))
console.log(replaceFirstLast("") )
console.log(replaceFirstLast("Hello") )
console.log(replaceFirstLast("Tech Global")) 
console.log(replaceFirstLast("A")) 
console.log(replaceFirstLast(" A "))






/*
Swap First and Last Four Characters
Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
18
  Examples:
swap4("abc") -> ""
swap4("JavaScript") -> "riptScJava" 
swap4("TechGlobal") -> "obalGlTech"
swap4("")  -> ""
swap4(" ") -> ""
swap4("Apple")-> ""

*/

function swap4(word) {   
    return word.length < 8 ? "" : word.slice(-4) + word.slice(4, -4) + word.slice(0, 4);
       return result;
   }
console.log(swap4("abc"))
console.log(swap4("JavaScript"))
console.log( swap4("TechGlobal"))
console.log( swap4(""))
console.log(swap4(" ")) 
console.log(swap4("Apple"))







/*
Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World")           
swapFirstLastWord("I like JavaScript") 
swapFirstLastWord("foo bar foo bar") 
swapFirstLastWord("")
 swapFirstLastWord(" ") 
 swapFirstLastWord("Hello") 
 swapFirstLastWord("Hello

*/
 const swapFirstLastWord = (string) => string.trim().split(/\s+/).length < 2 ? string: string.split(/\s+/).reverse().join(" ") 

 console.log(swapFirstLastWord("Hello World")) 
console.log(swapFirstLastWord("I like JavaScript")) 
console.log(swapFirstLastWord("foo bar foo bar")) 
console.log(swapFirstLastWord("") )
console.log(swapFirstLastWord(" ") )
console.log(swapFirstLastWord("Hello")) 
console.log(swapFirstLastWord("Hello"))

/*
Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string.
Examples:
noVowel("TechGlobal") -> "TchGlbl" 
noVowel("AEOxyz") -> "xyz" 
noVowel("Javascript") -> "Jvscrpt" 
noVowel("") -> ""
noVowel("125$") -> "125$"

*/





/*
Count Words
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.
NOTE: Be careful about the extra whitespaces before and after the string.
 Examples:
countWords(" Javascript is fun ") countWords("Cypress is an UI automation tool. ") countWords("1 2 3 4")
*/



const countConsonants = (word) => 
  [...word].filter(char => /[b-df-hj-np-tv-z]/i.test(char)).length;

console.log(countConsonants("Hello"));              
console.log(countConsonants("Hello World"));        
console.log(countConsonants("JavaScript is fun"));




/*
Count Positive Numbers
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive when invoked.
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 
countPos([-23, -4, 0, 2, 5, 90, 123]) 
countPos([0, -1, -2, -3])
*/

const countPos = (arr) =>{
  return arr.filter(num => num > 0).length
}

console.log(countPos([-45, 0, 0, 34, 5, 67]))

/*
Find Even Numbers
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive when invoked.
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7) 
getEvens(17, 5) 
getEvens(4, 4) 
getEvens(3, 3)
*/
function getEvens(start, end) {
  if (start > end) [start, end] = [end, start];

  const evens = [];
  for (let i = start; i <= end; i++) {
      if (i % 2 === 0) evens.push(i);
  }

  return evens;
}

console.log(getEvens(2, 7)) 
console.log(getEvens(17, 5)) 
console.log(getEvens(4, 4)) 
console.log(getEvens(3, 3))


/*
Find Numbers Divisible By 5
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers. Examples:
getMultipleOf5(3, 17) 
getMultipleOf5(23, 5) 
getMultipleOf5(5, 5) 
getMultipleOf5(2, 4)

*/
const getMultipleOf5 = (num1, num2) => {
  let min = Math.min(num1, num2)
  let max = Math.max(num1, num2)
  let getMultipleOf5 =[]
  for (let i = min ; i <= max ; i++){
    if( i % 5 === 0) getMultipleOf5.push(i)
  }
return num2 > num1 ? getMultipleOf5 :
getMultipleOf5 .reverse()
}

console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log( getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))
/*
Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument and returns how many elements are negative when invoked.
Examples:
countNeg([-45, 0, 0, 34, 5, 67])
 countNeg([-23, -4, 0, 2, 5, 90, 123]) 
 countNeg([0, -1, -2, -3])

*/

const countNeg =(arr) => arr.filter(ele => ele < 0).length
console.log(countNeg([-45, 0, 0, 34, 5, 67]))
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])) 
console.log(countNeg([0, -1, -2, -3]))



/*
Count A
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.
NOTE: Ignore case sensitivity.
Examples:
countA("TechGlobal is a QA bootcamp") 
countA("QA stands for Quality Assurance") 
countA("Cypress")

*/
 const countA =(string)=> string.trim().split('').reduces((acc, curr) => curr.toLowerCase().includes('a') ? acc +1 : acc ,0)
 console.log(countA("TechGlobal is a QA bootcamp"))
 console.log(countA("QA stands for Quality Assurance"))
 console.log(countA("Cypress"))
 /*

Count Words
-> 4 -> 5 -> 0
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.
countWords(" Javascript is fun ") 
countWords("Cypress is an UI automation tool. ") 
countWords("1 2 3 4")

 */

const countWords = (string) => string.trim().split(' ').length

console.log(countWords(" Javascript is fun "))
console.log(countWords("Cypress is an UI automation tool. "))
console.log(countWords("1 2 3 4"))

/*

Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5) 
factorial(4) 
factorial(0) 
factorial(1)

*/

function factorial(n){
  let result = 1
  for(let i = 1 ; i <= n ; i++){
    result *= i
  }
  return result 
}
console.log(factorial(5))
console.log(factorial(4)) 
console.log(factorial(0))
console.log(factorial(1))


/*
Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello") 
count3OrLess("Hi John") 
count3OrLess("JavaScript is fun") 
count3OrLess("My name is John Doe") 
 count3OrLess("")
*/
 const count3OrLess = (word) => word.split(/\s+/).filter(word => word.length >0 && word.length <= 3).length

 console.log(count3OrLess("Hello")) 
 console.log(count3OrLess("Hi John")) 
 console.log(count3OrLess("JavaScript is fun")) 
 console.log(count3OrLess("My name is John Doe")) 
 console.log(count3OrLess(""))


/*
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello") 
removeExtraSpaces("        Hello World ")
removeExtraSpaces("         javaScript is         fun  ")
*/

const removeExtraSpaces= (string) => string.trim()

console.log(removeExtraSpaces("Hello"))
console.log(removeExtraSpaces("        Hello World "))
console.log(removeExtraSpaces("         javaScript is         fun  "))



/*
Write a function named middleInt() which takes three number arguments and return the middle number.
middleInt(1, 2, 2) 
middleInt(5, 5, 8) 
middleInt(5, 3, 5) 
middleInt(1, 1, 1) 
middleInt(-1, 25, 10)
*/

const middleInt =(num1, num2, num3) => [num1, num2, num3].sort((a,b)=> a-b)[1]


console.log(middleInt(1, 2, 2)) 
console.log(middleInt(5, 5, 8))
console.log(middleInt(5, 3, 5))
console.log(middleInt(1, 1, 1)) 
console.log(middleInt(-1, 25, 10))




/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) 
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) 
firstDuplicate([ 5, '5', 3, 7, 4 ]) 
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])
firstDuplicate([ 1, 2, 3])
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])

*/

const firstDuplicate =(arr) =>{
  for(let i = 0 ; i < arr.length; i++){
    if(arr.includes(arr[i], i +1)) return arr [i]
  }
  return -1
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])) 
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))


/*
Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) 
getDuplicates([ 1, 2, 5, 0, 7 ])
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])

*/

const getDuplicates =(arr) =>{
  let Duplicates =[]
  for(let i = 0 ; i < arr.length;i++){
    if(arr.includes(arr[i],i +1) && !Duplicates.includes(arr[i]))
      Duplicates.push(arr[i])
  }
 return Duplicates
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])) 
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))


/*
Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.
Examples:
reverseStringWords("Hello World") 
reverseStringWords("I like JavaScript") 
reverseStringWords("Hello") 
reverseStringWords("") 
reverseStringWords(" ")

*/

const reverseStringWords = (string) => string.trim().split(/\s+/).map(str => str.split("").reverse().join("")).join()

console.log(reverseStringWords("Hello World")) 
console.log(reverseStringWords("I like JavaScript")) 
console.log(reverseStringWords("Hello")) 
console.log(reverseStringWords("")) 
console.log(reverseStringWords(" "))



/*
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") 
countConsonants("Hello World") 
countConsonants("JavaScript is fun")
*/

const countConsonants = string => [...string].filter(char => /[bcdfghjklmnpqrstvwxyz]/i.test(char)).length;
console.log(countConsonants("Hello"))
console.log(countConsonants("Hello World"))
console.log(countConsonants("JavaScript is fun"))







/*
Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.
countMultipleWords([ "foo", "", " ", "foo bar", " foo" ]
countMultipleWords([ "foo", "bar", "foobar", "     foobar "])
countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ])
countMultipleWords([ ])


*/

const countMultipleWords = arr => arr.filter(arr => arr.trim().split(/\s+/).length > 1).length

console.log(countMultipleWords([ "foo", "", " ", "foo bar", " foo" ]))
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar "]))
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ]))
console.log(countMultipleWords([ ]))

/*
FizzBuzz
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.

*/

const fizzBuzz =(num1, num2)=>{
let min = Math.min(num1, num2)
let max = Math.max(num1, num2)
let result =[]
for(let i= min ; i <= max; i++){
  if(i % 3 === 0 && i %5 ===0) result.push('fizzBuzz')
    else if(i %3 ===0) result.push('Fizz')
    else if(i %5 ===0) result.push('Buzz')
  else result.push(i)
}
return result.join('|')
}



console.log(fizzBuzz(13, 18))
console.log(fizzBuzz(12, 5)) 
console.log(fizzBuzz(5, 5)) 
console.log(fizzBuzz(9, 6))












/*
Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
Examples:
isPalindrome("Hello") -> false 
isPalindrome("Kayak") -> true 
isPalindrome("civic") -> true 
isPalindrome("abba") -> true 
isPalindrome("ab a") -> false 
isPalindrome("123454321") -> true 
isPalindrome("A") -> true i
sPalindrome("") -> true
*/

const isPalindrome = (str)=>{
  let strArr1 = str.trim().toLowerCase().split('')
  let strArr2 =[...strArr1].reverse()
  return strArr1.join('') === strArr2.join('')
}

console.log(isPalindrome("Hello")) //-> false 
console.log(isPalindrome("Kayak")) //-> true 
console.log(isPalindrome("civic")) // -> true 
console.log(isPalindrome("abba")) // -> true 
console.log(isPalindrome("ab a")) // -> false 
console.log(isPalindrome("123454321")) // -> true 
console.log(isPalindrome("A")) // -> true
console.log(isPalindrome(""))// -> true




/*
Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5) 
isPrime(2) 
isPrime(29) 
isPrime(-5) -> false 
isPrime(0) -> false 
isPrime(1) -> false
*/

const isPrime =(num)=>{
  if(num< 2) return false
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

console.log(isPrime(5)) 
console.log(isPrime(2)) 
console.log(isPrime(29)) 
console.log(isPrime(-5)) 
console.log(isPrime(0)) 
console.log(isPrime(1)) 


/*
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]) 
add([10,3,6,3,2],[6,8,3,0,0,7,5,10,34])
 add([-5, 6, -3, 11], [5, -6, 3, -11])
 */
 const add = (arr1, arr2) => arr1.concat(arr2.slice(arr1.length)).reduce((acc,_,i) =>{
 acc.push(arr1[i] ||0) +(arr2[i] || 0)
 return acc
 },[])


console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])) 
console.log(add([10,3,6,3,2],[6,8,3,0,0,7,5,10,34]))
 console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))

 /*
 Write a function named noA() which takes an array of strings as argument and will return a new array with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) 
noA(["apple", "123", "ABC", "javascript"])
noA(["apple", "abc", "ABC", "Alex", "A"])
*/
const noA=(arr) => arr.map(str => /[aA]/.test((str[0]))? '###' : str)


console.log(noA(["javascript", "hello", "123", "xyz"])) 
console.log(noA(["apple", "123", "ABC", "javascript"]))
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))

/*
Write a function named no3and5() which takes an array of integer numbers as argument and will return a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) 
no3and5([3, 4, 5, 6]) 
no3and5([10, 11, 12, 13, 14, 15])
*/
 const no3and5 =(arr)=>{
return arr.map(num =>{
  if(num % 15 ===0) return 101
  if(num % 5 ===0) return 99
  if(num % 3 ===0) return 100
  return num
})
 }


console.log(no3and5([7, 4, 11, 23, 17])) 
console.log(no3and5([3, 4, 5, 6]))
console.log(no3and5([10, 11, 12, 13, 14, 15]))

/*
No Elements Equals 13
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s.
Examples:
no13([1, 2, 3 ,4])
 no13([13, 2, 3])
no13([13, 13, 13 , 13, 13]) 
no13([])
*/

const no13 = (arr)=> arr.map(ele => ele === 13 ? 0 :ele)
console.log(no13([1, 2, 3 ,4]))
console.log(no13([13, 2, 3]))
console.log(no13([13, 13, 13 , 13, 13]))
console.log(no13([]))


/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])
removeDuplicates([1, 2, 5, 2, 3])
removeDuplicates([0, -1, -2, -2, -1])
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])
*/
const removeDuplicates =(arr)=> [...new Set(arr)]

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))
console.log(removeDuplicates([1, 2, 5, 2, 3]))
console.log(removeDuplicates([0, -1, -2, -2, -1]))
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]))

/*
No Digits
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string.
 noDigit("")
noDigit("Javascript") 
noDigit("123Hello") 
noDigit("123Hello World149") 
noDigit("123Tech456Global149")
*/



console.log(noDigit(""))
console.log(noDigit("Javascript"))
console.log(noDigit("123Hello"))
console.log(noDigit("123Hello World149"))
console.log(noDigit("123Tech456Global149"))



/*
Sum Of Digits
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string.
Examples:
sumOfDigits("Javascript") 
sumOfDigits("John’s age is 29") 
sumOfDigits("$125.0")

*/
const sumOfDigits =(string)=>{
  let sum =0
  for(let char of sum){
    if(/\d/.test(char)) sum += +char
  }
  return sum
}

console.log(sumOfDigits("Javascript"))
sconsole.log(umOfDigits("John’s age is 29")) 
console.log(sumOfDigits("$125.0"))



/*
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 
arrFactorial([0, 5]) 
arrFactorial([5 , 0, 6]) 
arrFactorial([])
*/

const arrFactorial=(arr) => {
  return [...arr].filter(char=>/\d/.test(char)).join('')
}

console.log(arrFactorial([1, 2, 3, 4]));  
console.log(arrFactorial([0, 5]));        
console.log(arrFactorial([5, 0, 6]));     
console.log(arrFactorial([]));   

