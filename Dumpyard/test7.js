function counter(){
    let c = 0;
    return function(){
        return c++;
    }
}
 const count = counter();
 console.log(count());
 console.log(count());
 console.log(count());
 console.log(count());

 const name = "default";
 
 const akshayObj = {
    name: "akshay",
    age: 29,
    printName: () => {
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }
 }

 const radheObj = {
    name: "radhe",
    age: 27
 }

akshayObj.printName.apply(radheObj);

 
