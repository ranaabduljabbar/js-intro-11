
// Print all the names that has 4 characters

const names = [ 'Mariia', 'Alex', 'John', 'Jane', 'Victoria' ];
names.forEach((names) => {
    if(names.length === 4) console.log(names)
    
})

const nums = [ 5, 3, 2, 1 ];
// Find sum of numbers: 11
// Find product of numbers: 30
// Create a new array which has all numbers miltiplied by 5: [ 25, 15, 10, 5 ]


let sum =0 
let product =1
const arr5 =[]
nums.forEach((nums) =>{
sum += nums
product *= nums
arr5.push(nums * 5)
})
console.log(sum)
console.log(product)