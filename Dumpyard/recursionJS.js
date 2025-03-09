const countDown = (num) => {
    if(num === 0){
        console.log("you are done");
        return;
    }else{
        console.log(`Running ${num}`);
        countDown(num-1);
    }
}

countDown(5);

const calcPower = (num, power) => {
    const count = 1;
    if(count === power){
        return;
    }
    num * num;
    count++;
    
    // for(let i=1; i<= power; i++){
    // }
}