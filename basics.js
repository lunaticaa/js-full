// // supersimple.dev/projects/amazon
// // create pop up
// alert("hello");
// // everything on the page
// document.body.innerHTML = "hello";
// // for rounding the number
// Math.round(2.8)
// // next line \n
// "hello\nthis is\namirmohammad"
// // type coercion
// 'thing1' + 2 + 4 + 'dffbdbdb'
// // type of
// typeof 'hello'
// //
// // or
// (|| && && )
// // falsy value
// 0 null undefined Nan ''
// NaN = 'text' * 4
// // short cut for if statement
// const result = true ? 'efsdgrw' : console.log('sdgsger');

// const message = false && 'hello';
// console.log(message);

// const currency = 'EUR' || 'USD';

// // default value for mul
// function calc(prameter1, mul = 4){
//   console.log(prameter1 * mul);

// }

// calc(2000 , 3)
// calc(2244)

// const pro = {
//   name: "svsfdv",
//   price: 13245
// }

// console.log(pro.name);

// // delete one property
// delete pro.newPropperty;
// console.log(pro);

console.log("hello".length);
console.log("hello".toUpperCase());
console.log("hello".toLowerCase());

const object1 = {
  message: "hello",
};

const object2 = object1;

object1.message = "good job";

console.log(object1);
console.log(object2);
const object3 = { message: "good job" };
console.log(object3 === object1);
console.log(object2 === object1);
// as same
const object4 = {
  message: "sfbbsf",
};
// const message = object4.message;
const { message } = object4;
// log
console.log(message);
