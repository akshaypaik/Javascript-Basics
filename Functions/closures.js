const secureBooking = function () {
    let passengerCount = 0;
    return function(){  // any function always has access to variable environment of execution context in which function is created even after that execution context is gone
        passengerCount++;
        console.log("passengerCount: ", passengerCount);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// A closure gives a function access to all variables of its parent function even after that parent function is returned.
// The function keeps a reference to its outer scope which preserves the scope chain throughout time.
