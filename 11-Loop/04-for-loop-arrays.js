// as weel knows as tranditional loop or i loop 

const names =['John','Jane', 'Alex', 'Mariia']

for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log(`End of `)

// get the even number
const numbers =[2, 6, 3, -1, 10 ,8]

let countE = [0]
for(let i= 0; i < numbers.length; i++){
    if(numbers[i] %2 === 0){
        countE++
    }
}
console.log(countE )

