let time = 30; //seconds

const startLogOutTimer = () => {
    const tick = () => {
        const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
        const seconds = String(time % 60).padStart(2, 0);
       
        console.log(`${minutes}:${seconds}`);

        if (time === 0) {
            clearInterval(logoutTimer);
            // logout user
        }

        time--;

    }
    tick();
    const logoutTimer = setInterval(tick, 1000);
}

startLogOutTimer();