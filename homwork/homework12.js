console.log("\n------------Task01-------------\n");

function makeNegative(number) {
  return number > 0 ? -number : number;
}
console.log(makeNegative(10));     
console.log(makeNegative(-7));    
console.log(makeNegative(0));     
console.log(makeNegative(0.45))

console.log("\n------------Task02-------------\n");

function isSumEvenOrOdd(n1, n2, n3) {
  const sum = n1 + n2 + n3;
  return sum % 2 === 0 ? "even" : "odd";
}
console.log(isSumEvenOrOdd(0, 1, 4));  
console.log(isSumEvenOrOdd(0, -1, -5)); 
console.log(isSumEvenOrOdd(0, 0, 0));  
console.log(isSumEvenOrOdd(7, 1, 9));   
console.log(isSumEvenOrOdd(1, 1, 1));

console.log("\n------------Task03-------------\n");
const decimal2 = (numbers) => {
  return numbers.map(num => Number(num.toFixed(2)));
}
console.log(decimal2([94.356, 8.9752]));             
console.log(decimal2([76.62, 128.4, 84]));           
console.log(decimal2([20987, 3.53245, 12.345, 32.9])); 
console.log(decimal2([]));                         
console.log(decimal2([4.35623, 8.9742])); 

console.log("\n------------Task04-------------\n");

const myPow = (x, n) => (n === 0) ? 1 : x * myPow(x, n - 1);
console.log(myPow(3, 3));    
console.log(myPow(10, 1));  
console.log(myPow(100, 0));  
console.log(myPow(1, 1));    
console.log(myPow(4, 2));    
console.log(myPow(0, 0));    
console.log(myPow(5, 3)); 


console.log("\n------------Task05-------------\n");

const findLongestWord=(str)=> {
  return str.trim() ? str.trim().split(/\s+/).reduce((a, b) => b.length > a.length ? b : a) : "";
}
onsole.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
console.log(findLongestWord("This is a sample string for testing"));          
console.log(findLongestWord("One two ten"));                                  
console.log(findLongestWord(""));                                            
console.log(findLongestWord("      "));     