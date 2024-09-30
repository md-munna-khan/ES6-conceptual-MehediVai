const numbers = [45,65,65,32,21,84,5,56]
// let find = null;
// for(let item of numbers){
//     if(item>50){
//         find = item;
//         break
//     }
// }
// console.log(find)
const result = numbers.find((item) => item > 50 && item %2 ==0)
console.log(result)