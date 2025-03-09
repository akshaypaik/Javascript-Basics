const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise pro1 resolved!");
    }, 5000);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise pro2 resolved!");
    }, 7000);
});

async function handlePromise(){
    console.log("handle promise started");
    // It looks like JS is waiting here but it is not waiting. It will suspend the function execution till this resolves.
    const val1 = await pro1;
    console.log(val1);
    console.log("handle promise ended for val1");

    const val2 = await pro2;
    console.log(val2);
    console.log("handle promise ended for val2");
}

handlePromise();