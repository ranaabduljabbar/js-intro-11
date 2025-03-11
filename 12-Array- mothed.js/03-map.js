
const sentences = ['Good evening', 'I like arrays', 'It is Monday'];
// each sentence's first word -> ['Good', 'I', 'It'];

const firstWords = sentences.map(sentence => sentence.split(' ')[0]);
console.log(firstWords)

const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]


const salariesWithTwoDecimals = salaries.map(salary => parseFloat(salary.toFixed(2)));

console.log(salariesWithTwoDecimals)


