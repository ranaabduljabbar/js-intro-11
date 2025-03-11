console.log("\n------------Task-1-------------\n");

function countPos(arr){
    let count =0
    for(let i= 0; i< arr.length;i++){
        if(arr[i]> 0){
            count++
        }
    }
    return count
}
console.log(countPos([-45, 0, 0, 34, 5, 67]) )
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]) )
console.log(countPos([0, -1, -2, -3]) )


console.log("\n------------Task-2-------------\n");

function countA(str){
    return[...str.toLowerCase()].reduce((count,char) => char === 'a' ? count +1:count,0)
}

console.log(countA("TechGlobal is a QA bootcamp"));  
console.log(countA("QA stands for Quality Assurance"));  
console.log(countA("Cypress")); 


console.log("\n------------Task-3-------------\n");

function countVowels(word) {
return [...word].reduce((count, char) => 'aeiouAEIOU'.includes(char) ? count + 1 : count, 0);
}

/*
function countVowels(word){
    let vowel = 'aeiouAEIOU';  
    let count = 0;
    for (let char of word) {
        if (vowel.includes(char)) {  
            count++;
        }
    }
    return count;
}
*/
console.log(countVowels("Hello"));  
console.log(countVowels("Hello World")); 
console.log(countVowels("JavaScript is fun"));  
console.log(countVowels("")); 


console.log("\n------------Task-4-------------\n");
function countConsonants(word) {
    return [...word].filter(char => /[a-zA-Z]/.test(char) && !'aeiouAEIOU'.includes(char)).length;
}


console.log(countConsonants("Hello"))  
console.log(countConsonants("Hello World"))  
console.log(countConsonants("JavaScript is fun")) 
console.log(countConsonants(""))  



console.log("\n------------Task-5-------------\n");

function countWords(str){
    return str.trim().split(/\s+/).filter(word=> word.length>0).length;

}

console.log(countWords("     Javascript is fun       "));  
console.log(countWords("Cypress is an UI automation tool.    "));  
console.log(countWords("1 2 3 4"));


console.log("\n------------Task-6-------------\n");

function factorial(n){
    let result =1
    for(let i= 1; i <= n;i++){
        result *= i
    }
    return result
}
console.log(factorial(5));  
console.log(factorial(4));  
console.log(factorial(0));  
console.log(factorial(1));



console.log("\n------------Task-7-------------\n");

function isPalindrome(word){
     word = word.toLowerCase().split('').filter(char => char !== '').join('')
     let reverseWord =word.split('').reverse().join('')
     return word === reverseWord
}

console.log(isPalindrome("Hello")); 
console.log(isPalindrome("Kayak")); 
console.log(isPalindrome("civic"));          
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"))
console.log(isPalindrome("A"));
console.log(isPalindrome("")); 

console.log("\n------------Task-8-------------\n");

function countMultipleWords(arr){
    return arr.filter(str => str.trim().split(/\s+/).length > 1).length
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); 
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])); 
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])); 
console.log(countMultipleWords([ ]));


console.log("\n------------Task-9-------------\n");
function count3OrLess(word){
    return word.split(/\s+/).filter(word => word.length > 0 && word.length <= 3).length
}
console.log(count3OrLess("Hello")); 
console.log(count3OrLess("Hi John")); 
console.log(count3OrLess("JavaScript is fun")); 
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));


console.log("\n------------Task-10-------------\n");
function isPrime(number){
    if(number < 2 ) return false
for(let i = 2 ; i < number; i++) {
if(number %i === 0){
    return false
}
}
return true
}

console.log(isPrime(5))		
console.log(isPrime(2)) 		
console.log(isPrime(29))		
console.log(isPrime(-5)) 		
console.log(isPrime(0) )		
console.log(isPrime(1)) 		
console.log(isPrime(8)) 		
console.log(isPrime(15)) 		





console.log("\n------------Task-11-------------\n");
function add(array1,array2 ){
let sum =[]
for(let i = 0 ; i < Math.min(array1.length, array2.length); i++){
 sum.push (array1[i]  + array2[i])
}
if(array1.length > array2.length){
    for(let i = array2.length ;i < array1.length ;i++){
        sum.push(array1[i])
    }
}
else{
    for(let i = array1.length ;i < array2.length ;i++){
        sum.push(array2[i])
    }
}
return sum 
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))


console.log("\n------------Task-12-------------\n");

function removeExtraSpaces(word){
    return word.trim().split(/\s+/).join(' ')
} 
console.log(removeExtraSpaces("Hello") )
console.log(removeExtraSpaces("      Hello    World     ")  )
console.log(removeExtraSpaces("     JavaScript is          fun")  )
console.log(removeExtraSpaces("") )


console.log("\n------------Task-13-------------\n");

function findClosestTo10(array){
    let distance = 100000
    let closest = 0
    for(let i= 0; i < array.length;i++){
        if(array[i] !== 10){
            let dif = Math.abs(10-array[i])
            if (dif < distance){
                distance =dif
                closest = array[i]
            }
            if(dif == distance){
                closest= Math.min(closest, array[i])
            }
        }
  
     
    }
    return closest
} 
console.log(findClosestTo10([10, -13, 5, 70, 15, 57]))
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]))
console.log(findClosestTo10([0, -1, -2]))




console.log("\n------------Task-14-------------\n");
function isEmailValid(email){
if(email.includes(' ')) return false
if(!email.includes('@')) return false
if(email.indexOf('@')!== email.lastIndexOf('@')) return false
if(!email.includes('.')) return false
let first = email.substring (0, email.indexOf('@'))
let middle = email.substring ( email.indexOf('@')+1,email.indexOf('.'))
let last = email.substring ( email.indexOf('.')+1)
if(first.length< 2 || middle.length<2 || last.length<2) return false
return true
} 
console.log(isEmailValid(""))
console.log(isEmailValid("@gmail.com") )
console.log(isEmailValid ("johndoe@yahoo") )
console.log(isEmailValid ("johndoe@.com") )
console.log(isEmailValid ("a@outlook.com") )
console.log(isEmailValid ("johndoe@a.com") )
console.log(isEmailValid("johndoe@@gmail.com"))
console.log(isEmailValid("johndoe@gmail.com")) 	



console.log("\n------------Task-15-------------\n");

function isPasswordValid(password){ 
if(password.length < 8 || password.length > 16) return false
if(password.includes(' ') ) return false
let digit ="0123456789"
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
let lowerCase ="abcdefghijklmnopqrstuvwxyz"
let special = "!@#$%^&*?{}[]"
let hasDigit = false
let hasUpperCase = false
let hasLowerCase = false
let hasSpecial = false
for(let i = 0 ;i < digit.length;i++){
    if(password.includes(digit[i])){
        hasDigit = true
        
    }
}
for(let i = 0 ;i < upperCase.length;i++){
    if(password.includes(upperCase[i])){
        hasUpperCase = true
        
    }
}
for(let i = 0 ;i < lowerCase.length;i++){
    if(password.includes(lowerCase[i])){
       hasLowerCase = true
        
    }
}
for(let i = 0 ;i < special.length;i++){
    if(password.includes(special[i])){
        hasSpecial= true
        
    }
}
return hasDigit && hasUpperCase && hasLowerCase && hasSpecial
} 

console.log(isPasswordValid("")) 			
console.log(isPasswordValid("abcd"))			
console.log(isPasswordValid("abcd1234") )		
console.log(isPasswordValid("Abcd1234") )	
console.log(isPasswordValid("Chicago12345US!#$%")) 	
console.log(isPasswordValid("Abcd1234$")) 		
console.log(isPasswordValid("Chicago123$")) 		
console.log(isPasswordValid("Test1234#")) 		


