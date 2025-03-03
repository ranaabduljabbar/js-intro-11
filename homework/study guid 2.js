function replaceFirstLast(str) {
    str = str.trim();  
    if (str.length < 2) return ''; 

    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
}
console.log(replaceFirstLast("")); 
console.log(replaceFirstLast("Hello")); 
console.log(replaceFirstLast("Tech Global")); 
console.log(replaceFirstLast("A")); 
console.log(replaceFirstLast(" A ")); 


function swapFirstLastWord(str) {
    const words = str.trim().split(' ');
    return words.length < 2 ? '' : [words[words.length - 1], ...words.slice(1, -1), words[0]].join(' ');
}

console.log(swapFirstLastWord("Hello World"));        
console.log(swapFirstLastWord("I like JavaScript"));  
console.log(swapFirstLastWord("foo bar foo bar"));   
console.log(swapFirstLastWord(""));                   
console.log(swapFirstLastWord(" "));                  
console.log(swapFirstLastWord("Hello"));          





function factorial(n) {
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    
    return result;
}
console.log(factorial(5));  
console.log(factorial(0));  
console.log(factorial(7));
