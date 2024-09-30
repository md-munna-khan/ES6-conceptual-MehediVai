// const numbers = [1,2,3,4,5];
// let sum =0;
// for(let item of numbers){
//     sum+= item
// }
// console.log(sum)


// arr.reduce ((previous ,current) => previous + current,initial)

/**
 * 0 + 1 = 1
 * 1 + 2 = 3
 * 3 + 3 = 6
 * 6 + 4 = 10
 */
// const numbers = [1,2,3,4];
// const sum = numbers.reduce((prev,current) => prev + current,0)
// console.log(sum)

// =========== initial value why need?================
const numbers = [{a:1},{a:2},{a:3},{a:4}];
// const total = numbers.reduce((prev,current) => prev + current.a) // outPut [object Object]234
// correct 
// const total = numbers.reduce((prev,current) => prev + current.a,0)

// if you want multiply initial value 1 
const multiply = numbers.reduce((prev,current) => prev * current.a,1)
console.log(multiply)