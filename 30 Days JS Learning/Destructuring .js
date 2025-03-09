// destructuring


const obj3 = {
    name: "akshay",
    age: 27,
    hobby: () => {
        //console.log("games, coding, etc..");
        return "games" + "," + "coding" + " " + "etc...";
    }
}

function printName({name}){		// destructuring, taking only name out of object instead of whole object
    console.log(name);
}

function printHobby({hobby}){
    console.log(hobby());
}
printName(obj3);
printHobby(obj3);