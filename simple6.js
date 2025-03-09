let a = 12;
let b = 0;
// b = a++;
// console.log(a);
// console.log(b);
b = --a;
console.log(a);
console.log(b);

function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

const decoded = parseJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YwZjdhNGM5ODI4ZWQ2NmM0OTA4NmUiLCJpc1N1YnNjcmliZWQiOnRydWUsInN1YnNjcmlwdGlvblBsYW4iOiJwcm9wbHVzIiwiaWF0IjoxNzA4NTg1MTI4LCJleHAiOjE3MDg2NzE1Mjh9.pW2EAtF1Api2SZkf_uWZ_umJ-koF2JdiCMKBJ0YwnF8")
console.log(decoded.subscriptionPlan);