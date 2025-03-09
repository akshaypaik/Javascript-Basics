function foo(){
    console.log(this.name);
}

const fooArrowFunc = () => {
    console.log(this.name);
}

foo.call({ name: 'Akshay' });
fooArrowFunc.call({ name: 'Akshay' });

// **************************************************************************************************************************************

const grandParentArrowFunc = () => {
    name =  "Devanna Pai";
    age = 95;
    console.log(`Name is ${this.name} and age is ${this.age}`);
    
    const child = () => {
            name =  "Krishnadas Pai";
            age = 66;
            console.log(`Child Name is ${this.name} and age is ${this.age}`);
            grandChild = () => {
                name =  "Akshay Pai";
                age = 29;
                console.log(`Grandchild Name is ${this.name} and age is ${this.age}`);
            }
            grandChild();
    }
    child();
}

grandParentArrowFunc();

function grandParent(){
    name =  "Devanna Pai";
    age = 95;
    console.log(`Name is ${this.name} and age is ${this.age}`);
    
    function child(){
            name =  "Krishnadas Pai";
            age = 66;
            console.log(`Child Name is ${this.name} and age is ${this.age}`);
            function grandChild(){
                name =  "Akshay Pai";
                age = 29;
                console.log(`Grandchild Name is ${this.name} and age is ${this.age}`);
            }
            grandChild();
    }
    child();
}

grandParent();
