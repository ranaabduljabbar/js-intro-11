console.log("\n------------Task1-------------\n");
function hasLowerCase(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase() && s[i] !== s[i].toUpperCase()) {
            return true;
        }
    }
    return false;
}
console.log(hasLowerCase(""));         
console.log(hasLowerCase("JAVASCRIPT")); 
console.log(hasLowerCase("hello"));     
console.log(hasLowerCase("125$"));      
console.log(hasLowerCase("   a   ")); 

console.log("\n------------Task2-------------\n");
function noZero(arr) {
    return arr.filter(num => num !== 0);
}
console.log(noZero([1]));            
console.log(noZero([1, 1, 10]));     
console.log(noZero([0, 1, 10]));     
console.log(noZero([0, 0, 0]));      
console.log(noZero([10, 100, 0]));

console.log("\n------------Task3-------------\n");
function numberAndSquare(arr) {
    return arr.map(num => [num, num * num]);
}
console.log(numberAndSquare([1, 2, 3]));   
console.log(numberAndSquare([0, 3, -6])); 
console.log(numberAndSquare([1, 4]));  
console.log(numberAndSquare([0, 0, 0]));  
console.log(numberAndSquare([0, 1, -10])); 


console.log("\n------------Task4-------------\n");
function containsValue(arr, value) {
    return arr.includes(value);
}
console.log(containsValue(["abc", "foo", "javascript"], "hello"));  
console.log(containsValue(["abc", "def", "123"], "Abc"));        
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"))

console.log("\n------------Task5-------------\n");
function reverseSentence(sentence) {
    const words = sentence.split(" ");

   
    if (words.length < 2) {
        return "There is not enough words!";
    }

    return words.reverse().join(" ");
}
console.log(reverseSentence("Hello"));            
console.log(reverseSentence("Javascript is fun")); 
console.log(reverseSentence("This is a sentence"));


console.log("\n------------Task6-------------\n");
function removeStringSpecialsDigits(str) {
   
    return str.replace(/[^a-zA-Z\s]/g, '');
}
console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));  
console.log(removeStringSpecialsDigits("Cypress"));                
console.log(removeStringSpecialsDigits("Automation123#$%")); 

console.log("\n------------Task7-------------\n");
function removeArraySpecialsDigits(arr) {
    return arr.map(str => str.replace(/[^a-zA-Z\s]/g, ''));
}
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));  
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));  
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])); 

console.log("\n------------Task8-------------\n");
function getCommons(arr1, arr2) {
    return arr1.filter(word => arr2.includes(word));
}
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); 
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]));  
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); 


console.log("\n------------Task9-------------\n");
function noXInVariables(arr) {
    return arr
        .map(item => {
            if (typeof item === 'string') {
                return item.replace(/[xX]/g, '');
            }
            return item;
        })
        .filter(item => {
            return !(typeof item === 'string' && item === '');
        });
}
console.log(noXInVariables(["abc", 123, "#$%"])); 
console.log(noXInVariables(["xyz", 123, "#$%"]));  
console.log(noXInVariables(["x", 123, "#$%"]));  
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));