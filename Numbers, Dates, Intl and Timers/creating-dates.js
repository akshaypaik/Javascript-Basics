// create a date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));

console.log(new Date('December 24, 2015')); // unreliable

// 2025-03-17T10:21:12.548Z -> Z means UTC (time without any time zone in London and also without daylight savings)

console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(0));   // 1970-01-01T00:00:00.000Z -> 1 Jan 1970

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log("future: ", future);    // 19th Nov 2037
console.log("future: ", future.getFullYear());
console.log("future: ", future.getMonth()); // this is 0 based
console.log("future: ", future.getDate());  // 19
console.log("future: ", future.getDay());   // 4 (Thursday) again 0 based starting with Sunday as 0
console.log("future: ", future.getHours()); // 15
console.log("future: ", future.getMinutes());   // 23
console.log("future: ", future.getSeconds());   // 0
console.log("future: ", future.toISOString()); // International standard -> 2037-11-19T09:53:00.000Z
console.log("future: ", future.getTime());  // 2142237180000 -> timestamp is milliseconds that has passed since 1 Jan 1970
console.log(Date.now());    // gives us the timestamp

future.setFullYear(2040);   // setting year to 2040
console.log("future: ", future);    // 2040-11-19T09:53:00.000Z










