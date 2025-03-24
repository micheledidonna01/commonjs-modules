const hobbies = require("./hobbies.js");

const nameComplete = require("./names.js");

function person(){
    const objPerson = {
        fullName : nameComplete("Michele", "Didonna"),
        hobbies : hobbies('cucinare', 'sviluppare', 'bere')
    };
    console.log(objPerson);
};

person();

