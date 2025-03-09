
this.hobbies = [
    "walking",
    "eating"
];
const akshayObj = {
    name: "akshay",
    age: 29,
    hobbies: [
        "trading",
        "gaming",
        "travelling"
    ],
    // showHobbies: function() {
    //     console.log(`my hobbies are ${this.hobbies.join(" ")}`);
    // }
    
    // showHobbies: function () {
    //     // console.log("this: ", this);
    //     setTimeout(() => {
    //         console.log(`my hobbies are ${this.hobbies.join(" ")}`);
    //     }, 2000);
    // }

    showHobbies: () => {
        console.log("this: ", this);
        console.log(`my hobbies are ${this.hobbies.join(" ")}`);
    }
}

akshayObj.showHobbies();
