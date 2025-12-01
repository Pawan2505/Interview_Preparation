// function counter() {
//   let count = 0;
//   console.log("Hello")
//   return function () {
//     count++;
//     console.log(count);
//   }
// }

// let c = counter();
// c(); // 1
// c(); // 2


// let arr = [1,3,4,5];

// let result = arr.reduce((a,b)=>{
//     console.log("a : ",a);
//     console.log("b : ",b);
// });

// console.log(result)

// let obj = { a: 10 , name:"Pawan"};
// let child = Object.create(obj);

// console.log(child.name); // 10 (inherited)


// function Animal(name) {
//   	this.name = name;
// }

// Animal.prototype.speak = function () {
//   	console.log(`${this.name} makes a sound.`);
// };

// const dog = new Animal("Buddy");

// // console.log(dog.name);
// dog.speak();