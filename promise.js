const lotteryPromise = new Promise((resolve, reject) => {
  console.log("Lottery draw is happening!🔮");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You Win!💰");
    } else {
      reject(new Error("You Loose!💩"));
    }
  }, 2000);
});

lotteryPromise
  .then((response) => console.log(response))
  .catch((error) => console.error(error.message));
