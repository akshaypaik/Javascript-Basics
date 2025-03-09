const url = "/spends/getCreditCardSpendDetails?username=test11@gmail.com";

const urlSplit = url.split("/");
console.log(urlSplit);

const dateString = "2024-02-27";
console.log(new Date(dateString));

const time = Date.now();
let data = [
  {
    _id: "65ddcfc8c46d32fddf098a87",
    title: "as",
    description: "as",
    date: "2024-02-27",
  },
  {
    _id: "65ddcfff35a69caa225f2517",
    title: "asas",
    description: "asasa",
    date: "2024-02-27",
  },
  {
    _id: "65e1e4080d1fb9784e109453",
    title: "asasasa",
    description: "a4444",
    date: "2024-03-01",
  },
];

data.sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();

    const aDelta = Math.abs(time - aTime);
    const bDelta = Math.abs(time - bTime);

    return (aDelta - bDelta);
});

console.log("data: ", data);
