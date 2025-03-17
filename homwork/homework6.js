console.log("\n------------Task1-------------\n");
function noSpace(string) {
    return string.split(' ').join('')
    }


console.log(noSpace(""));  
console.log(noSpace("Javascript"));  
console.log(noSpace("    Hello   ")); 
console.log(noSpace(" Hello World   "));  
console.log(noSpace("Tech Global"));

console.log("\n------------Task2-------------\n");

const replaceFirstLast =(string) => (string).trim().length< 2 ? "":string.trim().at(-1) +string.trim().slice(1, -1) +string.trim().at(0)

console.log(replaceFirstLast("")) 
console.log(replaceFirstLast("Hello")) 
console.log(replaceFirstLast("Tech Global"))
console.log(replaceFirstLast("A")) 
console.log(replaceFirstLast(" A "))


console.log("\n------------Task3-------------\n");

const hasVowel =(string)=>/[aeoui]/i.test(string)

console.log(hasVowel("")) 
console.log(hasVowel("Javascript")) 
console.log(hasVowel("Tech Global")) 
console.log(hasVowel("1234")) 
console.log(hasVowel("ABC")) 

console.log("\n------------Task4-------------\n");
function checkAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

   
    if (yearOfBirth > currentYear || age > 120) {
        return "AGE IS NOT VALID";
    }
    
    if (age < 16) {
        return "AGE IS NOT ALLOWED";
    }
    
    return "AGE IS ALLOWED";
}


console.log(checkAge(2015));  
console.log(checkAge(2007));  
console.log(checkAge(2050)); 
console.log(checkAge(1920));  
console.log(checkAge(1800));  

console.log("\n------------Task5-------------\n");

const averageOfEdges =(num1, num2, num3)=> (Math.min(num1, num2, num3) + Math.max(num1, num2, num3))/2

console.log(averageOfEdges(0, 0, 0))
console.log(averageOfEdges(0, 0, 6)) 
console.log(averageOfEdges(-2, -2, 10)) 
console.log(averageOfEdges(-3, 15, -3)) 
console.log(averageOfEdges(10, 13, 20))

console.log("\n------------Task6-------------\n");
const noA =(arr) =>{
    return arr.map(str => /[aA]/.test(str[0]) ? '###' : str);
}

console.log(noA(["javascript", "hello", "123", "xyz"]));  
console.log(noA(["apple", "123", "ABC", "javascript"]));  
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

console.log("\n------------Task7-------------\n");

const no3and5=(arr) =>{
    return arr.map(num => {
        if (num % 15 === 0) return 101; 
        if (num % 5 === 0) return 99;  
        if (num % 3 === 0) return 100; 
        return num;                  
    });
}

console.log(no3and5([7, 4, 11, 23, 17]));  
console.log(no3and5([3, 4, 5, 6]));        
console.log(no3and5([10, 11, 12, 13, 14, 15]))

console.log("\n------------Task8-------------\n");

function countPrimes(arr) {
    return arr.filter(num => num > 1 && ![...Array(Math.floor(Math.sqrt(num)) - 1)].map((_, i) => i + 2).some(i => num % i === 0)).length;
}
console.log(countPrimes([-10, -3, 0, 1]));  
console.log(countPrimes([7, 4, 11, 23, 17]));  
console.log(countPrimes([41, 53, 19, 47, 67]));  

console.log("\n------------Task9-------------\n");
const removeDuplicates=(arr)=> {
    return [...new Set(arr)];  
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));  
console.log(removeDuplicates([1, 2, 5, 2, 3]));  
console.log(removeDuplicates([0, -1, -2, -2, -1])); 
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));  
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));  

console.log("\n------------Task10-------------\n");
function isDateFormatValid(date) {
    const parts = date.trim().split('/');
    return parts.length === 3 && parts[0].length === 2 && parts[1].length === 2 && parts[2].length === 4 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2]);
}

console.log(isDateFormatValid(""));  
console.log(isDateFormatValid("15/30/2020"));  
console.log(isDateFormatValid("10-30-2020"));  
console.log(isDateFormatValid("10.30.2020")); 
console.log(isDateFormatValid("5/30/2020"));  
console.log(isDateFormatValid("05/30/2020 "));  
console.log(isDateFormatValid("10/2/2020"));  
console.log(isDateFormatValid("10/02/2020 ")); 

console.log("\n------------Task11-------------\n");
function secondMax(arr) {
    arr = [...new Set(arr)].sort((a, b) => b - a);
    return arr.length === 1 ? arr[0] : arr[1];
  }
  
  console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); 
  console.log(secondMax([3, 4, 5, 6])); 
  console.log(secondMax([10]))

console.log("\n------------Task12-------------\n");
function secondMin(arr) {
    arr = [...new Set(arr)].sort((a, b) => a - b);
    return arr.length === 1 ? arr[0] : arr[1];
  }
  
  console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
  console.log(secondMin([3, 4, 5, 6])); 
  console.log(secondMin([10]));

console.log("\n------------Task13-------------\n");
function mostRepeated(arr) {
    const count = arr.reduce((acc, item) => (acc[item] = (acc[item] || 0) + 1, acc), {});
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
  }
  
  console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); 
  console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])); 
  console.log(mostRepeated([10])); 
  console.log(mostRepeated(["TechGlobal"]))