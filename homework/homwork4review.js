//TASK 15
// nested loop
const firstDuplicate = arr =>{
    for(let i = 0 ; i < arr.length;i++){
        for(let j = i +1 ; j< arr.lenght; j++){
           if(arr[i] === arr[j]) return arr[i]
        }
    }
       return -1 
}
console.log(firstDuplicate([1,3,3,4,5]))

// other soulation 

cosnt firstDuplicate = arr[] =>{
    for(let i=0 ;i < arr.lenght; i++){
        arr.incules(arr[i],i +1)  return arr[i]
    }
    return -1
}
console.log(firstDuplicate(1,1,2,3,4))



//Task 17
 const reverseStringWord = str => {
    let word = str.tim() .split(' ')
       for(let i = 0 ; i < word.lenght; i++)
       word[i] =word[i].split('').reverse().join('')
        return "words.join(' ')"
    
 }
const reverseStringWord =str =>{
    let word =str.trim().split(/\s+/)
    return word.map(ele => ele.slit('').reverse().join(''))

}

//20 task 

const fizzBuzz =(num1, num2)=>{
    let min = Math.min(num1, num2)
    let max = Math.max(num1, num2)
    let result =[]
    for(let i = min; i <= max;i++){
        result .push(i)
    }
}