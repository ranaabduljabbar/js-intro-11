console.log("\n------------Task1-------------\n");
function hasUpperCase(str) {
    return /[A-Z]/.test(str);
}
console.log(hasUpperCase("javascript")); 
console.log(hasUpperCase("John"));        
console.log(hasUpperCase("$125.0"));    
console.log(hasUpperCase(""));

console.log("\n------------Task2-------------\n");
const noDigit=(str)  =>{
    return str.split('').filter(char => isNaN(char) || char === ' ').join('');
}
console.log(noDigit(""))             
console.log(noDigit("Javascript"))    
console.log(noDigit("123Hello"))
console.log(noDigit("123Hello World149")) 
console.log(noDigit("123Tech456Global149"))

console.log("\n------------Task3-------------\n");
const noVowel=(str)=> {
    return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(noVowel("TechGlobal"))
console.log(noVowel("AEOxyz"))
console.log(noVowel("Javascript"))
console.log(noVowel(""))

console.log("\n------------Task4-------------\n");

const no13 =(str)=> str.map(ele=> ele === 13 ? 0 :ele)
console.log(no13([1, 2, 3, 4]))
console.log(no13([13, 2, 3]))
console.log(no13([13, 13, 13, 13, 13]))
console.log(no13([]))

console.log("\n------------Task5-------------\n");

const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a,b)=> a-b)[1]

console.log(middleInt(1, 2, 2))
console.log(middleInt(5, 5, 8))
console.log(middleInt(5, 3, 5))
console.log(middleInt(1, 1, 1))
console.log(middleInt(-1, 25, 10))


console.log("\n------------Task6-------------\n");

const sumOfDigits= (str)=>{
    let sum = 0
    for(let char of str){
        if (/\d/.test(char))sum += +char
    }
    return sum 
}
console.log(sumOfDigits("Javascript"))
console.log(sumOfDigits("John’s age is 29"))
console.log(sumOfDigits("$125.0"))
console.log(sumOfDigits(""))

console.log("\n------------Task7-------------\n");

const arrFactorial =(arr)=>{
    return arr.map(num =>{
        if(num === 0)return 1
        let factorial =1
        for(let i =1; i <= num; i++){
            factorial *= i
        }
        return factorial
    })
}
console.log(arrFactorial([1, 2, 3, 4]))   
console.log(arrFactorial([0, 5]))
console.log(arrFactorial([5, 0, 6]))
console.log(arrFactorial([]))   