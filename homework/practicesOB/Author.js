/*
1. Create a class called Author
2. Create a constructor which takes firstName, lastName, country, array of books
3. Create a function called as getFullName() for Author object that will return {firstName lastName}
4. Create a function called as getBooks() for Author object that will return all the books
*/


class Author {

    constructor(firstName, lastName, country, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.books = books;  
    }

getFullName() {
    return (`${this.firstName} ${this.lastName}`);
}

getBooks() {
    return this.books;
}
}
module.exports = Author;


const Author = require('./practices/Author');  

const author = new Author("George", "Orwell", "United Kingdom", ["1984", "Animal Farm"]);

console.log(author.getFullName());  

console.log(author.getBooks());