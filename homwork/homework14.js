console.log("\n------------Task01-------------\n");
const repeatingX=(str) =>{
    str = str.toLowerCase(); 

    let found = false;

    str.split('').reduce((prev, curr) => {
        if (prev === 'x' && curr === 'x') {
            found = true;
        }
        return curr;
    });

    return found;
}
console.log(repeatingX("xTechxGlobalx"));   
console.log(repeatingX("Hello Xx World"));   
console.log(repeatingX("x x"));              
console.log(repeatingX(""));                 
console.log(repeatingX("xxxxx")); 

console.log("\n------------Task02-------------\n");

const isPerfectSquare=(num) =>{
    if (num < 0) return false; 
    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt);
}
console.log(isPerfectSquare(25));  
console.log(isPerfectSquare(24));   
console.log(isPerfectSquare(0));   
console.log(isPerfectSquare(1));    
console.log(isPerfectSquare(-1));   
console.log(isPerfectSquare(144));

console.log("\n------------Task03-------------\n");
function convertTemperature(value, unit) {
    switch (unit.toLowerCase()) {
        case 'celsius':
            return (value * 9/5) + 32;
        case 'fahrenheit':
            return (value - 32) * 5/9;
        default:
            throw new Error("Unit must be 'Celsius' or 'Fahrenheit'");
    }
}
console.log(convertTemperature(100, 'Celsius'));     
console.log(convertTemperature(32, 'Fahrenheit'));   
console.log(convertTemperature(0, 'Celsius'));      
console.log(convertTemperature(212, 'Fahrenheit'));  
console.log(convertTemperature(-40, 'Celsius'));     
console.log(convertTemperature(-40, 'Fahrenheit'));

console.log("\n------------Task04-------------\n");

const sumOfEvenNumbers=(arr) =>{
    return arr.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
}
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])); 
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]));
console.log(sumOfEvenNumbers([]));
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5]));
console.log(sumOfEvenNumbers([10, 20, 30, 40, 50]))

console.log("\n------------Task05-------------\n");
const capsOdds=(arr)=> {
    return arr.map((item, index) => {
        return index % 2 === 1 ? item.toUpperCase() : item;
    });
}
console.log(capsOdds(["Hello", "World"]));
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"])); 
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])); 
console.log(capsOdds([])); 
console.log(capsOdds(["John !@#$%", "^&*() Doe"]))