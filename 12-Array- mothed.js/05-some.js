const numbers = [1, 2, 3, 4, 5]

// check if all numbers in the array are postive

let flag = true // I assume all the numbers are postive
for(const num of number){
    if(num <= 0){
        flag =false
        break
    }
}

console.log(flag) // true

numbers .forEach((x) => {
    if(x <= 0) flag = false
})
console.log(flag) // true
