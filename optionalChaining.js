const petOwner = {
    name:"billu",
    contact :{
        phone:"435236",
        email:"435@gamail.com"
    },
    pet:{
        name:"lofie",
        info:{
            color:"black",
            weight:"3.5kg"
        },
    },
    food:['apple',"orange","papaya"]
};

// object  access
// console.log(petOwner?.contact?.phone)
// console.log(petOwner.pet.info.color)

// optional chaining ?
// console.log(petOwner.address)
// console.log(petOwner.address?.house)

console.log(petOwner?.food[0])