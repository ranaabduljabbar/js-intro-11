console.log("\n------------Task1-------------\n");
function fizzBuzz1(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}
console.log(fizzBuzz1(0));    
console.log(fizzBuzz1(1));   
console.log(fizzBuzz1(3));    
console.log(fizzBuzz1(5));   
console.log(fizzBuzz1(30));  
console.log(fizzBuzz1(10));   
console.log(fizzBuzz1(15));  
console.log(fizzBuzz1(-15));


console.log("\n------------Task2-------------\n");
function fizzBuzz2(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    
    return result;
}
console.log(fizzBuzz2(3));   
console.log(fizzBuzz2(5));   
console.log(fizzBuzz2(10));  
console.log(fizzBuzz2(15));

console.log("\n------------Task3-------------\n");

function findSumNumbers(str) {
    const numbers = str.match(/\d+/g);
    if (numbers === null) {
        return 0;
    }

    return numbers.reduce((sum, num) => sum + Number(num), 0);
}
console.log(findSumNumbers("abc$"));               
console.log(findSumNumbers("a1b4c  6#"));         
console.log(findSumNumbers("ab110c045d"));        
console.log(findSumNumbers("525"));                
console.log(findSumNumbers("3 for 10 dollars"));   

console.log("\n------------Task4-------------\n");

const findBiggestNumber=(str)=>  Math.max(...str.match(/\d+/g)?.map(Number) || [0]);
console.log(findBiggestNumber("abc$"));           
console.log(findBiggestNumber("a1b4c  6#"));      
console.log(findBiggestNumber("ab110c045d"));     
console.log(findBiggestNumber("525"));             
console.log(findBiggestNumber("3 for 10 dollars")


console.log("\n------------Task5-------------\n");
const countOccurrencesOfCharacters = str => 
    str === "" ? "" : [...str].reduce((acc, char) => acc.includes(char) ? acc : acc + `${str.split(char).length - 1}${char}`, '');
console.log(countOccurrencesOfCharacters(""));         
console.log(countOccurrencesOfCharacters("abc"));      
console.log(countOccurrencesOfCharacters("abbcca"));  
console.log(countOccurrencesOfCharacters("aaAAa"));   
console.log(countOccurrencesOfCharacters("www"));

console.log("\n------------Task6-------------\n");

const fibonacciSeries1 = (n) => {
    if (n <= 0) return [];  
    if (n === 1) return [0]; 
    
    let fibSeries = [0, 1]; 
    
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);  
    }
    
    return fibSeries;  
};
console.log(fibonacciSeries1(3));  
console.log(fibonacciSeries1(5)); 
console.log(fibonacciSeries1(7));  
console.log(fibonacciSeries1(8)); 
console.log(fibonacciSeries1(1));  
console.log(fibonacciSeries1(2)); 


console.log("\n------------Task7-------------\n");
const fibonacciSeries2 = (n) => {
    let [a, b] = [0, 1];
    for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
    return n === 1 ? 0 : b;
};
console.log(fibonacciSeries2(2));  
console.log(fibonacciSeries2(4));  
console.log(fibonacciSeries2(8));  
console.log(fibonacciSeries2(9));  
console.log(fibonacciSeries2(1)); 

console.log("\n------------Task8-------------\n");
const findUniques = (arr1, arr2) => {
    const combined = [...arr1, ...arr2]; 
    return combined.filter((value, index) => 
        combined.indexOf(value) === index && combined.lastIndexOf(value) === index
    );  
};
console.log(findUniques([], []));             
console.log(findUniques([], [1, 2, 3, 2]));  
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); 
console.log(findUniques([8, 9], [9, 8, 9])); 
console.log(findUniques([-1, -2], [1, 2]));

console.log("\n------------Task9-------------\n");
const isPowerOf3 = (num) => {
    if (num <= 0) return false;  
    while (num % 3 === 0) {
        num /= 3; 
    }
    return num === 1;  
};
console.log(isPowerOf3(1));    
console.log(isPowerOf3(2));    
console.log(isPowerOf3(3));    
console.log(isPowerOf3(27));   
console.log(isPowerOf3(100));  
console.log(isPowerOf3(81));  
console.log(isPowerOf3(9)); 