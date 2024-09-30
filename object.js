//  const myInfo = {
//     name: 'munna',
//     age : 23,
//     work: 'students',
//     year: "final",
//    contact:{
//     phone:97070,
//     gmail:'939efjfa'
//    }
//  }

//  const obj2 ={ ...myInfo};
//  obj2.married = false;
//  obj2.age = 20
//  console.log(myInfo);
//  console.log(obj2)

// const myName = myInfo.name // old output style

// update style
// in objects secuinses maintain not needed

// mon moto variable not allow

// const {age} = myInfo
// console.log(age)


// custom name use
// const {age:myAge} = myInfo
// console.log(myAge)

//value distructuring 
// const {contact} = myInfo
// console.log(contact)
// const {gmail} =contact;
// console.log(gmail)
// update system
// const {contact:{gmail}} = myInfo
// console.log(gmail)




//================ object access ============
//1. dot notation
//2. bracket notation
const myInfo = {
        name: 'munna',
        age : 23,
        work: 'students',
        year: "final",
    //    contact:{
    //     phone:97070,
    //     gmail:'939efjfa'
    //    }
     }

//1. bracket notation
// value all string thats way you declare [] third bracket
for(let key in myInfo){
    console.log( myInfo [key])
}



// 2. dot notation
// console.log(myInfo.name)
// const x = 'work'
// console.log(myInfo["name"])
// console.log(myInfo[x])