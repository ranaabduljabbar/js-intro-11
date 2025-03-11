const numbers=[3,6,10,4]
let countEven=numbers.reduce((accumulator,currents) => {
 if(current %2 === 0) return accumulator +1
 return  accumulator
}, 0)
console.log(countEven)


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find shortest fruit -> Kiwi

console.log(fruits.reduce((acc, curr) => acc.length < curr.length ? acc :curr))

