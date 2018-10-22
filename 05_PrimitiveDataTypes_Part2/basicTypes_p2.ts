/* Array */
// One way of declaring arrays, type[]
let numberArr: number[] = [10, 20, 30, 40, 50];
let stringArr: string[] = ['Bob', 'Sam', 'Lucy'];
// The other way of declaring arrays, Array<elemType>:
let numberArr: Array<number> = [10, 20, 30, 40, 50];
let stringArr: Array<string> = ['Bob', 'Sam', 'Lucy']; 
// access arrays
console.log(stringArr[1]);


/* Array Functions */

// Change element with index
var cars: string[] = ["Toyota", "Buick", "Ford", "Jeep", "Honda" ];
cars[1] = "Mercedes-Benz";
console.log(cars);

// Delete Element
// WARNING: Using delete leaves undefined holes in the array. Instead, use shift() or pop().
delete cars[1];
console.log(cars);

// Add new element to end of array: push()
cars.push("BMW");
console.log(cars);

// Remove last element from array: pop()
cars.pop();
console.log(cars);

// Add new element to beginning of array: unshift()
cars.unshift("Lexus");
console.log(cars);

// Remove first element from array: shift()
cars.shift();
console.log(cars);

// Sort array
cars.sort();  
console.log(cars);

// Concatenating Arrays
let colors1: string[] = ['Green', 'Red'];
let colors2: string[] = ['Blue', 'Yellow'];
let colors3: string[] = ['Purple', 'White'];
let combineColors: string[] = colors1.concat(colors2, colors3);
console.log(combineColors);

// Remove element chunks in array: splice() 
combineColors.splice(2,4);
console.log(combineColors);

// Return an array (or just a piece of it) into a new array: slice()
let newColors: string[] = combineColors.slice(1,2);
console.log(combineColors);
console.log(newColors);


/* Strings as Arrays */

// Property Access
let hello = "hi there";
console.log(hello[4]); // returns t

// Converting string to array with split()
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit";   // String
console.log(lorem.split(" ")); // Split on space

// Converting Arrays to Strings 
// with toString()
let animals: string[] = ['Dog', 'Cat', 'Mouse'];
let animalsToStr: string = animals.toString();
console.log(animalsToStr);
// with join()
let animalsJoin: string = animals.join(' chases ');


/* TUPLES */

// Declare Tuple type
let tup: [number, string];

// Correct way of initializing it
tup = [3, 'Sam'];

// Incorrect way of initializing it
x = ['Sam', 3];

tup[1].toUpperCase(); // OK
tup[0].toUpperCase(); // Error, does not exist on type number



/* ENUMS */
// delcare an Enum
enum Phones {iPhone, Samsung, Nokia}
let p: Phones = Phones.iPhone;

// change the beginning of numbering of values
enum Phones {iPhone=2, Samsung, Nokia}
let p: Phones = Phones.Samsung;

// manually set all values
enum Phones {iPhone=2, Samsung=5, Nokia=9}
let p: Phones = Phones.Samsung;

// go from numeric to string
enum Phones {iPhone=2, Samsung=5, Nokia=9}
let pn: string = Phones[5];

console.log(p);

/* ANY */
let someVar: any = 'Sam'; // strart off being a string
someVar = 45; // is now a number
someVar = true; // and now it's a boolean

/* VOID */
function sayHello(): void {
    console.log('Hi there');
}