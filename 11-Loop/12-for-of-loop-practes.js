
//const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];


for(const name of names){
    console.log(name)
}

//for(let i = 0; i< names.length; i++){
 //   console.log(name[i])
//}


//TASK2 
/*const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];
let count =0
for(const name of names){
    if(name.startsWith('J') || name.startsWith('j')){
        count++;
    }
}
console.log(count)
*/
const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];
let count4 = 0 
for(const name of names){
    if (names.length === 4){
        count4++
    }
}
console.log(count4)