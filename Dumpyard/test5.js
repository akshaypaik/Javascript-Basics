const patternDraw = (N) => {
    for(i = 1; i<=N; i++){
        console.log(Array(i).fill(i).join(' '));
    }
}

patternDraw(3);

console.log(" ");

const patternDrawReverseSeq = (N) => {
    for(i=N ; i>=1; i--){
        // console.log(Array(i).fill(i).join(" "));
        console.log(Array.from({ length: i }, (_, index) => index + 1 ).join(" "));
        
    }
}

patternDrawReverseSeq(5)


