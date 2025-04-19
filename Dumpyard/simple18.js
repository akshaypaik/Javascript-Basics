const obj = {
    name: "akshay",
    age: 30,
    printName: function(){
        console.log(`the name is ${this.name}`);
    }
}


const obj2 = {
    name: "radhe",
    age: 28
}

const obj3 = {
    name: "krishnadas",
    age: 66
}

const obj4 = {
    name: "kavitha",
    age: 62
}

obj.printName();
obj.printName.call(obj2);
obj.printName.apply(obj3);
const kavithaBind = obj.printName.bind(obj4);
kavithaBind();
