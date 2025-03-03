
const numbers=[3,4,7,3,2,2, 7]
let sum =0 
for(const num of numbers){
    sum+= num
}

let average = numbers.length > 0 ? sum / numbers.length : 0

console.log(sum)
console.log(average)

const number=[3,4,7,3,2,,2,7]
let product = 1
for(let i = 3; i < number.length; i++){
    product *= number[i]

}
console.log(product)