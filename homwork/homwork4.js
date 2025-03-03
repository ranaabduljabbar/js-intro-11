console.log("\n------------Task1-------------\n");

for(let i = 1; i<= 100; i++){
    if(i %7 === 0)
    console.log(i)
}

console.log("\n------------Task2-------------\n");
for(let i = 1; i<= 50; i++){
    if(i %2 === 0 && i %3 === 0)
        console.log(i)
}

console.log("\n------------Task3-------------\n");
for(let i = 100; i >= 50; i--){
    if(i % 5 === 0)  
        console.log(i)
}
console.log("\n------------Task4-------------\n");

for(let i =0; i <= 7; i++){
    console.log(i *2)
}

console.log("\n------------Task5-------------\n");

let sum =0
for(let i = 1; i <= 10; i++){
    sum += i
    console.log(sum)
}

console.log("\n------------Task6-------------\n");
let num = Math.floor (Math.random() * ( 10 -1 + 1 ) + 1)
let factorial = 1;  
for (let i = num; i >= 1; i--) {
    factorial *= i; 
}
console.log (`${num} != ${factorial}`);



 






console.log("\n------------Task7-------------\n");
let i = 0 
let randomNumber = 0

while(randomNumber %5 === 0){
    randomNumber = Math.floor(Math.random() * 10) + 1;
  i++
}
console.log(`The random number is ${randomNumber} and it took ${i} i /s to generate it.`); 

console.log("\n------------Task8-------------\n");

const countries =['Germany', 'Argentina', 'Ukraine', 'Romania']

console.log(countries)
console.log([... countries].sort())


console.log("\n------------Task9-------------\n");

const dogNames= ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'] 

console.log(dogNames)
console.log(dogNames.includes('Pluto'))

console.log("\n------------Task10-------------\n");

const cartoonCats =['Garfield', 'Tom ', 'Sylvester', 'Azrael']
 console.log(cartoonCats)
 console.log(cartoonCats.includes('Garfield and Felix'))
 
console.log("\n------------Task11-------------\n");

const numbers =[10.5, 20.75, 70, 80, 15.75]
console.log(numbers)
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

console.log("\n------------Task12-------------\n");

const objects =['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']
 console.log(objects)

 let startsWithBP = 0;
let containsBookOrPen = 0

 for(let i = 0; i < objects.length;i++){
    console.log(i)
 }







console.log("\n------------Task13-------------\n");

const storeNumbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]
console.log(storeNumbers)

let moreThan10 = 0
let lessThan10 = 0
let equalThan10 = 0

for(let i = 0; i < storeNumbers.length; i++){
    moreThan10 += i
    lessThan10 += i
    equalThan10 += i

console.log(`Elements that are more than 10 = ${moreThan10}`);
console.log(`Elements that are less than 10 = ${lessThan10}`);
console.log(`Elements that are 10 = ${equalThan10}`);
}

console.log("\n------------Task14-------------\n");

const array1 = [ 5, 8, 13, 1, 2 ]
const array2 = [ 9, 3, 67, 1, 0 ]

const array3 = []
for (let i = 0; i < array1.length; i++){
    array3.push(Math.max(array1[i], array2[i]))

}
console.log(`1st array1 is =  ${array1}`)
console.log(`2nd array2 is = ${array2}`)
console.log(`3rd array3 is =  ${array3}`)

console.log("\n------------Task15-------------\n");

let duplicate = []
const firstDuplicate = arr => {
    for(let i =0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === arr.lastndexOf(arr[i])){
            duplicate = -1
            
        
        } else{
            duplicate = arr[i]
            break
        }
    }
    return duplicate
}

console.log(`firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> `, firstDuplicate ([ 3, 7, 10, 0, 3, 10 ]))
console.log(`firstDuplicate([ 5, 7, 7, 0, 5, 10 ])	-> `, firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(`firstDuplicate([ 5, '5', 3, 7, 4 ])	-> `, firstDuplicate([ 5, '5', 3, 7, 4 ]))
console.log(`firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) ->`,firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(`firstDuplicate([ 1, 2, 3]) ->`,firstDuplicate([ 1, 2, 3]))			
console.log(`firstDuplicate([ 'foo', 'abc', '123', 'bar']) ->`,firstDuplicate([ 'foo', 'abc', '123', 'bar']))



console.log("\n------------Task16-------------\n");

let getDup = []
const getDuplicates = arr => {
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
           getDup.includes(arr[i]) ? null: getDup.push(arr[i])
        }
   }
   return getDup;
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))			
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))

console.log("\n------------Task17-------------\n");
 let word1 ;
 let word2
const reverseStringWords = string => {
    word2 = []
    let arr22 = string. split(' ')
    for(let i =0; i < arr22.length; i++){
        let word1 =[]
        for(let j =0; i<arr22[i].length;j >=0; j--){
            word2.push(arr22[i][j].trim())
        }
        word1.push(word2.join(''))
    }
     return word1.join(' ')
}
console.log (reverseStringWords("Hello World"))        
console.log (reverseStringWords("I like JavaScript"))  
console.log (reverseStringWords("Hello")) 
console.log (reverseStringWords(""))                
console.log (reverseStringWords("    "))              

console.log("\n------------Task18-------------\n");
let arr1;

const getEvens = (num1, num2) => {
    arr1 = []; 
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        
        if (i % 2 === 0) arr1.push(i);
    }

    return arr1;
}


console.log(getEvens(2, 7))   
console.log(getEvens(17, 5)) 
console.log(getEvens(4, 4)) 
console.log(getEvens(3, 3)) 


console.log("\n------------Task19-------------\n");
let arr3;
const getMultipleOf5 = (num3, num4) => {
    arr3 = [];  
    
    for (let i = Math.min(num3, num4); i <= Math.max(num3, num4); i++) {
        if (i % 5 === 0) arr3.push(i);
    }
    return arr3;
}


console.log(getMultipleOf5(3, 17)) 
console.log(getMultipleOf5(23, 5)) 
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))


console.log("\n------------Task20-------------\n");
