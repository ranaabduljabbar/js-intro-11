console.log("\n------------Task01-------------\n");

const countPalindrome= (text) => {
    
    let words = text.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
      
        let word = words[i].toLowerCase().replace(/[^a-z0-9]/g, '');

        let reverse = '';
        for (let j = word.length - 1; j >= 0; j--) {
            reverse += word[j];
        }

        if (word && word === reverse) {
            count++;
        }
    }

    return count;
}
console.log(countPalindrome("Mom and Dad")); 
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers")); 
console.log(countPalindrome("")); 
console.log(countPalindrome("No palindrome here"));

console.log("\n------------Task02-------------\n");

const sum=(arr, isEven)=> {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isEven && i % 2 === 0) {
            total += arr[i];
        } else if (!isEven && i % 2 !== 0) {
            total += arr[i];
        }
    }
    return total;
}

console.log(sum([1, 5, 10], true));         
console.log(sum([3, 7, 2, 5, 10], false));
console.log(sum([-1, 1, -2, 2], true));     
console.log(sum([0, -1, 15, 1], false));   
console.log(sum([1, 2, 3, 4, -4], true)); 

console.log("\n------------Task03-------------\n");

const nthChars=(str, n)=>{
    let result = '';
    for (let i = n - 1; i < str.length; i += n) {
      result += str[i];
    }
    return result;
  }
  console.log(nthChars("Java", 2));         
console.log(nthChars("JavaScript", 5));   
console.log(nthChars("Java", 3));         
console.log(nthChars("Hi", 4));           
console.log(nthChars("0123456789", 2));

console.log("\n------------Task04-------------\n");

const canFormString=(a, b)=> {
    a = a.toLowerCase().replace(/\s/g, '');
    b = b.toLowerCase().replace(/\s/g, '');
    for (let char of b) {
      if (!a.includes(char)) return false;
      a = a.replace(char, '');
    }
    return true;
  }

  console.log(canFormString("CONVERSATION", "voices rant on"));

  console.log("\n------------Task05-------------\n");

  const isAnagram =(str1, str2)=> {

    const normalize = str => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
  }

  console.log(isAnagram("Apple", "Peach"));          
console.log(isAnagram("listen", "silent"));          
console.log(isAnagram("astronomer", "moon starer")); 
console.log(isAnagram("CINEMA", "iceman"));         
console.log(isAnagram("123", "1234"));  


console.log("\n------------Task06-------------\n");

const count=(arr, isEven)=> {
    return arr.filter(num => isEven ? num % 2 === 0 : num % 2 !== 0).length;
  }
  console.log(count([1, 5, 10], true));           
  console.log(count([3, 7, 2, 5, 10], false));    
  console.log(count([-1, 1, -2, 2], true));       
  console.log(count([0, -1, 15, 1], false));      
  console.log(count([1, 2, 3, 4, -4], true));

  console.log("\n------------Task07-------------\n");
  function sumDigitsDouble(str) {
    let m = str.match(/\d/g);
    return m ? m.reduce((a, c) => a + +c, 0) * 2 : -1;
  }

console.log(sumDigitsDouble("Javascript"));  
console.log(sumDigitsDouble("23abc45"));     
console.log(sumDigitsDouble("Hi-23"));        
console.log(sumDigitsDouble("ab12"));        
console.log(sumDigitsDouble("n0numh3r3"));

console.log("\n------------Task08-------------\n");

const countOccurrence=(str1, str2)=> {
    return (str1.split(str2).length - 1);
  }
console.log(countOccurrence("Javascript", "Java"));           
console.log(countOccurrence("Hello", "World"));               
console.log(countOccurrence("Can I can a can", "anc"));       
console.log(countOccurrence("Hello", "l"));                    
console.log(countOccurrence("IT conversations", "IT"));