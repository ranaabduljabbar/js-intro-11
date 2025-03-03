const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19

let sum = 0 

for(let i = 0; i < numbers.length; i++){
    if(i %2 === 0 ){
        sum += numbers[i]
    }
}
console.log(sum)

let productOdd = 1 
for(let i = 1; i <numbers.length; i +=2){
    productOdd *= numbers[i]

}
console.log(productOdd)
