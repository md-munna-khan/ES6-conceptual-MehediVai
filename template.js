// const name ="munna"
// const age =23
// const job = "teacher"

// const sentence = 'amar name ' +name+ ' amar age '+age+' amar kag '  +job

// const sentence1 = `amar name ${name} amar boyosh ${age} amar job ${job}`
// console.log(sentence)
// console.log(sentence1)



const myInfo = {
    name: 'munna',
    age : 23,
    work: 'students',
    year: "final",
subjects :["bangla", "english","math"]
}
const sentence = `amar name ${myInfo.name} amar subjects ${myInfo.subjects.map((sub) => sub)}`
// const sentence = `amar name ${myInfo.name} amar subjects ${myInfo.subjects}`
console.log(sentence)