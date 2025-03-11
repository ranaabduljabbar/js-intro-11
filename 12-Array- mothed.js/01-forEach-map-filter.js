/*
map 
[1, 3, 6, 7] -> [2, 6, 12, 14]
[1, 3, 6, 7] -> [1, 9, 36, 49]
['foo' , 'bar' ,'foobar'] -> ['Foo', 'BAR', 'FOOBAR]

-it return a same size array

*/


const numbers =[1, 3, 6, 7]
/*function double(number){
    return number * 2
}

const numberdeble=numbers.map(double)
console.log(numberdeble)
console,log(numbers)
*/
//other soulation 

const numberdeble = numbers.map((number)=>{
    return number *2
})
console.log(numberdeble)
console,log(numbers)


 const number= [1, 3, 6, 7]
 const numberSquared=numbers.map((number)=>{
    return number *number
 })
 console.log(numberSquared)
 console.log(number)

const words =['foo' , 'bar' ,'foobar'] 
    const wordsUpper= words.map((word)=>{
        return word.toUpperCase()
    }) 
console.log(wordsUpper)

/*     Filter
[1,24,6,9,11] -> [2,4,6]

['Jane','Alex, 'Max','James','John'] // if we want letter start with j
['Jane','Alex, 'Max','James','John'] // if you want the length
-it usulaly returns a new array with smaller size
*/


const number=[1,24,6,9,11] 

function event(number){
    return number % 2 === 0
}
const evenNumber=number.filter(even)
console.log(evenNumber)

// other soulation 
const evenNumber= number.filter((number)=>{
    return number %2 === 0
})
onsole.log(evenNumber)


const names = ['Jane','Alex, 'Max','James','John']
    names.filter((name)=>{
        return name.toUpperCase()[0] === 'J'
    })
    console.log(nmaesJ)

    const names = ['Jane','Alex, 'Max','James','John']
        names.filter((name)=>{
            return name.length === 4
        })
        console.log(nmaes)



        /* Reduce
        [1, 2, 4, 5]
        [1, 2, 4, 5]

       ['Jane','Alex', 'Max','James','John']

         it return a single Value
        */

         //soulation for of 
         /*cosnt number =  [1, 2, 4, 5]

         let sum = 0 
         for(const num of numbers){
            sum += num
         }
         consle.log(sum)
         */

         cosnt number =  [1, 2, 4, 5]
       
            const result=number.reduce((sum,num)=>{
             sum += num
             return sum
         },0 )
         console.log(result)

         // [1, 2, 4, 5]

        const maxNumber = [1, 2, 4, 5]
        number.reduce((acc,curr) =>{
         if(curr > acc) return curr
         return acc
        }, -Infinity)
        console.log(maxNumber)

        const names =['Jane','Alex', 'Max','James','John']

        names.reduce(()=>{
if(acc.length < curr.length) return acc
return curr
  },names[0])
  console.log(shortest)