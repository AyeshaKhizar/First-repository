// Q-1
// const product = {
//     name: "pen",
//     price: 10,
//     rating: 4.5,
//     offer: 455,
// };
// console.log(product);
// Q-2
// const profile = {
//     username: "@zoya_faisal",
//     isfollow: false,
//     followers: 190,
//     following: 56,

// };
// console.log(typeof profile["followers"]);
// let age = 16;
// console.log(age >= 18 ? "adult" : "not adult");
// let num = prompt("enter a number");
// if (num % 5 === 0) {
//     console.log("multiple of 5");
// }
// else {
//     console.log("not multiple of 5");
// }
// let score = prompt("enter your score");
// let grade;
// if (score <= 90 && score >= 100)
//     console.log("grade A");
// else if (score >= 70 && score <= 89)
//     console.log("grade B");
// else if (score >= 70 && score <= 89)
//     console.log("grade C");
// else if (score >= 60 && score <= 69)
//     console.log("grade D");
// else if (score >= 50 && score <= 59)
//     console.log("grade E");
// else if (score >= 0 && score <= 49)
//     console.log("grade F");
// console.log("your grade is ", grade);
// for-loop
// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }
// while-loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// let i = 20;
// do {
//     console.log("Ayesha Khizar");
//     i++;
// } while (i <= 25);
// for of loop
// let str = "javascript";
// let size = 0;
// for (let i of str) {
//     console.log("i = ", i);
//     size++;
// }
// console.log("string size=", size);
// string question

// let fullname = prompt("enter your fullname");
// let username = "@" + fullname;
// console.log(username);

// let companies = ["Bloomberg", "Microsoft", "uber", "Google", "IBM", "Netflix"];
// // companies.shift();
// // companies.splice(2, 1, "Ola");
// companies.push("Amazon");

// function countvowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countvowels("javascript");

// const countvowels = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// };
// let num = [25, 5, 7, 8, 99];
// num.forEach((num) => {
//     console.log(num * num);
// });

// let marks = [32, 78, 94, 93, 40, 95];
// let toppers = marks.filter((val) => {
//     return val > 90;


// });
// console.log(toppers);
let n = prompt("enter a number:");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);
let sum = arr.reduce((prev, curr) => {
    return prev + curr;


})
console.log("sum=", sum);
















