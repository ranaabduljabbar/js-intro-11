/*Write a function called checkProductCondition that takes an array of numbers and returns:

true if any two  elements in the array have a product that's greater than or equal 
to twice the sum of all elements

false if no such pair exists 

Example: 
checkProductCondition([2, 1, 3, 4])   // false 
// sum = 10, 
// 2  x sum = 20, 


Test Data: 
checkProductCondition([4, 1, 2, 3]) // false
checkProductCondition([2, 3, 6, 9]) // true
checkProductCondition([5, 9, 11, 5]) // true
checkProductCondition([5, 6, 3, 4, 2, 1]) // false
checkProductCondition([5, 6, 1, 2, 2, 6]) // false

*/

const checkProductCondition =(arr)=>{
    const sum = arr.reduce((acc, num) => acc + num, 0)
    const target = 2 * sum 
    for( let i = 0 ; i < arr.length; i++){
        for(let j = i +1 ; j < arr.length; j++){
            if(arr[i] * arr[j] >= target){
                return true
            }   
        }
    }
    return false
}
console.log(checkProductCondition([4, 1, 2, 3]))
console.log(checkProductCondition([2, 3, 6, 9])) 
console.log(checkProductCondition([5, 9, 11, 5]))
console.log(checkProductCondition([5, 6, 3, 4, 2, 1])) 
console.log(checkProductCondition([5, 6, 1, 2, 2, 6])) 

