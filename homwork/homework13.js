console.log("\n------------Task01-------------\n");

const countVC=(str) =>{
  const vowels = 'aeiou';
  let v = 0, c = 0;

  for (const ch of str.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      if (vowels.includes(ch)) v++;
      else c++;
    }
  }

  return { vowels: v, consonants: c };
}
console.log(countVC("Hello"));          
console.log(countVC("Programming"));   
console.log(countVC("123AbC"));         
console.log(countVC("123!@#xyz"));     
console.log(countVC(""));  

console.log("\n------------Task03-------------\n");
const countChars=(str)=> {
  const res = {};
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === ' ') continue;
    const code = ch.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      res.letters = (res.letters || 0) + 1;
    } else if (code >= 48 && code <= 57) {
      res.numbers = (res.numbers || 0) + 1;
    } else {
      res.specials = (res.specials || 0) + 1;
    }
  }
  return res;
}

countChars("Hello")              
countChars("Programming 123")     
countChars("123AbC!@#")           
countChars("0987654321")          
countChars("     ")               
countChars("") 

console.log("\n------------Task03-------------\n");
const maxOccurrences=(str)=> {
  const counts = {};
  let maxChar = '', maxCount = 0;

  for (const ch of str) {
    if (ch === ' ') continue;
    counts[ch] = (counts[ch] || 0) + 1;
    if (counts[ch] > maxCount) {
      maxCount = counts[ch];
      maxChar = ch;
    }
  }

  return maxChar;
}
console.log(maxOccurrences("Hello"));         
console.log(maxOccurrences("Occurrences"));   
console.log(maxOccurrences("    ab    "));    
console.log(maxOccurrences("12   3   21"));   
console.log(maxOccurrences("      "));        
console.log(maxOccurrences(""));  

console.log("\n------------Task04-------------\n");
const starOut=(str)=> {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '*') continue;
    if (str[i - 1] === '*' || str[i + 1] === '*') continue;
    result += str[i];
  }
  return result;
}
console.log(starOut("ab*cd"));    
console.log(starOut("ab**cd"));   
console.log(starOut("xm*sm*sy")); 
console.log(starOut("abc"));      
console.log(starOut("***"));     
console.log(starOut("   "));     
console.log(starOut(""));  

console.log("\n------------Task05-------------\n");
const romanToInt=(s) =>{
  const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let total = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const curr = map[s[i]];
    if (curr < prev) total -= curr;
    else total += curr;
    prev = curr;
  }

  return total;
}
console.log(romanToInt("I"));      
console.log(romanToInt("IV"));        
console.log(romanToInt("CXII"));    
console.log(romanToInt("MMM"));        
console.log(romanToInt("MMMDCCCLXXXVIII"));
console.log(romanToInt("MDCLXVI"));