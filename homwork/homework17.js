console.log("\n------------Task07-------------\n");
const findMedian = (a, b) => {
  const m = a.concat(b).sort((x, y) => x - y);
  const n = m.length, mid = n >> 1;
  return n % 2 ? m[mid] : (m[mid - 1] + m[mid]) / 2;
};
console.log(findMedian([1, 3], [2]));        
console.log(findMedian([1, 2], [3, 4]));   
console.log(findMedian([4], [3]));          
console.log(findMedian([4], []));          
console.log(findMedian([0], [0, 1])); 


console.log("\n------------Task02-------------\n");
const calculateFactorial = n => n <= 1 ? 1 : n * calculateFactorial(n - 1);

console.log(calculateFactorial(0));  
console.log(calculateFactorial(1));  
console.log(calculateFactorial(5)); 
console.log(calculateFactorial(6));  
console.log(calculateFactorial(10));
console.log(calculateFactorial(4));

console.log("\n------------Task03-------------\n");

const calculateGCD = (a, b) => b === 0 ? a : calculateGCD(b, a % b);
calculateGCD(8, 12)   
calculateGCD(17, 5)    
calculateGCD(48, 18)  
calculateGCD(0, 5)     
calculateGCD(21, 14)   
calculateGCD(60, 48) 

console.log("\n------------Task04-------------\n");

onst calculateGCD = (a, b) => b === 0 ? a : calculateGCD(b, a % b);

const calculateLCM = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / calculateGCD(a, b);
};

console.log(calculateLCM(8, 12));   
console.log(calculateLCM(17, 5));   
console.log(calculateLCM(48, 18));  
console.log(calculateLCM(0, 5));    
console.log(calculateLCM(21, 14));  
console.log(calculateLCM(60, 48));