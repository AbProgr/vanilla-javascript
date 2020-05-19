// console methods
console.clear();

console.log("Hello Vanilla JS");
console.log(123);
console.log(true);
console.log([1, 2, 3, 4, 5]);
console.log({ a: 1, b: 2, c: 3 });

console.table({ a: 1, b: 2, c: 3 });
console.error("This is how you log errors to console");
console.warn("This is a warning on console");

console.time("test");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd("test");
// end of console methods

// variables
// var
var name = "vanilla";
console.log(name);
name = "javascript";
console.log(name);

var greeting;
console.log(greeting);
greeting = "Hello JS";
console.log(greeting);
// end of var

// let
let test = "let";
console.log(test);
test = "variable";
console.log(test);
// end of let

// const
const test1 = "const";
console.log(test1);
test1 = true; // will throw - TypeError: Assignment to constant variable

const test2 = { name: "const" };
console.log(test2);
test2.name = "modified value";
console.log(test2); // no error - as object/arrays are ref type and point to a memory location only
test2 = [1, 2, 3];
console.log(test2); // error - TypeError: Assignment to constant variable. - as we cannot assign new value
// end of const
// end of variable

// data types
// primitives
console.log(typeof "apple");
console.log(typeof 123);
console.log(typeof false);
console.log(typeof null);
console.log(typeof Symbol());
// end of primitives

// reference
console.log(typeof { a: 1, b: 2 });
console.log(typeof [1, 2, 3]);
console.log(typeof new Date());
console.log(typeof function dummy() {});
// end of reference
// end of data types
