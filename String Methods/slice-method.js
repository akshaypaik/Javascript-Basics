const airlines = "Air India Express";
const plane = "A320";

console.log(plane[0]);  // A
console.log(airlines.length);   // 17

console.log(airlines.indexOf('r')); // 2 (first occurance)
console.log(airlines.lastIndexOf('r')); // 13 (last occurance)
console.log(airlines.indexOf('india')); // -1 (case sensitive)

// Slice 
console.log(airlines.slice(4)); // 4 is the position which extraction starts (doesnot mutate overlaying string)
console.log(airlines);
console.log(airlines.slice(4, 9));  // 9 is not included (length will always be end-beginning that is 9-4 => 5(India))

console.log(airlines.slice(0, airlines.indexOf(" ")));  // Air
console.log(airlines.slice(airlines.lastIndexOf(" ") + 1)); // Express

console.log(airlines.slice(-2));    // slices from the end
console.log(airlines.slice(1, -1));    

const checkMiddleSeat = (seat) => {
    // B and E are middle seats
    const middleSeats = ['B', 'E'];
    if(middleSeats.includes(seat.slice(-1))){
        console.log(`Congratulations!🎉 your seat ${seat} is a middle seat!😎`);
    }else{
        console.log(`Your seat ${seat} is not a middle seat!😞 Better luck next time!🤞`);
    }
}

checkMiddleSeat('12C');
checkMiddleSeat('24B');
checkMiddleSeat('3E');







