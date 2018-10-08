/* Boolean */
let passedExam: boolean = true;
console.log(typeof(passedExam));

/* Number */
// All numbers in TypeScript are floating point values. 
// TypeScript supports binary, hex and octal literals
let integer: number = 25;
let floating: number = 66.77;
let binary: number = 0b1101; //13
let hexadecimal: number = 0xAC3; // 2755
let octal: number = 0o1067; // 567

let mult = floating * 3;
let multLiterals = octal * binary;

console.log('Number class: ', Number(hexadecimal));
console.log(mult);
console.log(multLiterals);
console.log(hexadecimal);
console.log(typeof(hexadecimal));


/* String */
let animal: string = 'horse';
animal = 'turtle';

// Template Strings and Embedded Expressions 
// Surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }
let product: string = `T-Shirts`;
let numberSold: number = 100;
let templateStr: string = `We specialize in selling ${ product }.

This week we sold ${ numberSold } of them.`;

// This is equivalent to declaring sentence like so:
let concatenatedStr: string = "We specialize in selling " + product + ".\n\n" +
    "This week we sold " + numberSold + " of them.";

/* String Functions */
console.log(product.length); // length
// search in string
let searchString = templateStr.search("selling");
console.log(searchString);
// slice() extracts a part of a string and returns the extracted part in a new string
let slice = templateStr.slice(3, 8);
console.log(slice);
// Replacing String Content
let replace = templateStr.replace("specialize", "pride ourselves");
console.log(replace);
// concatenate
let word1 = "Hi";
let word2 = "There";
let greeting = word1.concat(" ", word2);
// Upper and lower case
let someText = "Hi there";
console.log(someText.toUpperCase());
console.log(someText.toLowerCase());