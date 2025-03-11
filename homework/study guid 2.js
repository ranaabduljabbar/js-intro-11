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
Count Positive Numbers
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive when invoked.
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 
countPos([-23, -4, 0, 2, 5, 90, 123]) 
countPos([0, -1, -2, -3])
*/

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

/*
Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument and returns how many elements are negative when invoked.
Examples:
countNeg([-45, 0, 0, 34, 5, 67])
 countNeg([-23, -4, 0, 2, 5, 90, 123]) 
 countNeg([0, -1, -2, -3])

*/

/*
Count A
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.
NOTE: Ignore case sensitivity.
Examples:
countA("TechGlobal is a QA bootcamp") countA("QA stands for Quality Assurance") countA("Cypress")

*/



/*
Count Words
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.
NOTE: Be careful about the extra whitespaces before and after the string.
 Examples:
countWords(" Javascript is fun ") countWords("Cypress is an UI automation tool. ") countWords("1 2 3 4")
*/

const firstLastWord = (word) => {
    const words = word.trim().split(" "); 
    if (words.length === 0) return "";   
    return words[0] + words[words.length - 1]; 
};