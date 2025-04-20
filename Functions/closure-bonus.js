// closure is like a function bundled with its lexical scope or environment (where it is present).
function outer() {
    var c = 10;
    console.log("outer");
    return function inner() {
        console.log(c);
        // inner2();
        c++;
    }
    // function inner2(){
    //     console.log("I am inner 2");
    // }
    // return inner;
}

const counter = outer();
counter();
counter();
counter();

function grandParent(){
    var name = "devanna";
    console.log(`my name is '${name}'`);
    return function child(){
        var childName = "krishnadas";
        name = "Mr. devanna";
        console.log(`my name is '${childName}' and my father name is '${name}'`);
        // grandChild still remembers its lexical environment even after it is returned
        return function grandChild(){
            var grandChildName = "akshay";
            childName = "Mr. krishnadas"
            console.log(`my name is '${grandChildName}' and my father name is '${childName}' and my grandfather name is '${name}'`);
        }
        // grandChild();
    }
}

const family = grandParent();
const family2 = family();
family2();