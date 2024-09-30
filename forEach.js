// const arr = [10,25,65,674,745,43,23]
// for(let item of arr){
//     console.log(item)
// }

// for Each,map
// (item) =>
    // arr.forEach((item) =>item)

// function show(a){
//     console.log(a)
// }
// just element access check
const arr = [10,25,65,674,745,43,23]

// arr.forEach((a) => {
//     console.log(a)
// })
// let sum = 0;
// arr.forEach((a) => {
//     sum += a
// })
// console.log(sum)
// callback parameters give the 3 things ( item, index,whole array)
arr.forEach((item,index,a) => {
        console.log("items:",item, "index",index,a)
    })