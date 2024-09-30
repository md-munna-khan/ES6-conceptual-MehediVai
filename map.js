const arr = [10,25,65,674,745,43,23]
// arr.map ((item,index,a) =>{
//     console.log("item",item,"index,",index,a)
// })
// const result = arr.map((a) =>a*2);
// console.log(result)

// second line map
const result = arr.map((item) =>{
    const x = item +2;
    return x
})
console.log(result)