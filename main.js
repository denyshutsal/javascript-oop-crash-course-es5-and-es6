// const s1 = "Hello";
// console.log(s1); // string

// const s2 = new String("Hello");
// console.log(s1); // object

// Object Literal
// const book1 = {
//   title: "Book One",
//   author: "John Doe",
//   year: "2013",
//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book1.title); // Book One

// console.log(book1.getSummary()); // Book One was written by John Doe in 2023

// console.log(Object.values(book1)); // ['Book One', 'John Doe', '2013']
// console.log(Object.keys(book1)); // ['title', 'author', 'year','getSummary']

// Constructor -----------------------------------

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   };
// }

// Instatiate an Object
// const book1 = new Book("Book One", "John Doe", "2013");
// const book2 = new Book("Book Two", "Johny Cage", "2009");

// console.log(book1); // Book {title: 'Book One', ....}__proto__: Object -> constructor: f Book(title, author...)
// console.log(book1.getSummary());
// book2 ...

// Prototypes --------------------------------
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// getSummary prototype
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// getAge prototype
// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`;
// };

// Revise / Change Year prototype
// Book.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revised = true;
// };

// const book2 = new Book("Book Two", "Johny Cage", "2009");

// console.log(book2.getSummary()); // Book {title: 'xczczc', author:'zvvv', year:'zcxzcx'}__proto__ -> getSummary: f(), getAge: f()

// book2.revise("2018");
// console.log(book2); // Book {title: 'xczczc', author:'zvvv', year:'2018', revised: true}

// Inheritance -----------------------

// Magazine Constructor
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);

//   this.month = month;
// }

// Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
// const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");

// Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);
// console.log(mag1.getSummary());

// Object of Protos --------------------------------

// const bookProtos = {
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
//   getAge: function () {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   },
// };

// Crate Object
// const book1 = Object.create(bookProtos);
// book1.title = "Book One";
// book1.author = "John Doe";
// book1.year = "2013";

// const book1 = Object.create(bookProtos, {
//   title: { value: "Book One" },
//   author: { value: "John Doe" },
//   year: { value: "2013" },
// });

// console.log(book1);

// ES6 Classes -------------------------------------

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }

//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   }

//   revise(newYear) {
//     this.year = newYear;
//     this.revised = true;
//   }

//   static topBooksStore() {
//     return "Barnes & Noble";
//   }
// }

// Instantiate Object
// const book1 = new Book("Book One", "John Doe", "2013");

// console.log(book1);
// book1.revise("2018");
// console.log(book1);

// console.log(Book.topBooksStore()); // acces to static method

// -----------------------

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
// }

// Magazine Subclass
// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     super(title, author, year);
//     this.month = month;
//   }
// }

// Instantiate Megazine
// const mag1 = new Megazine("Mag One", "John Doe", "2018", "Jan");

// console.log(mag1.getSummary());
