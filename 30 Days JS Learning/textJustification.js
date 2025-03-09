const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;

const fullJustify = function(words, maxWidth) {
    let singleSentence = "";
    let newSentence = [];
    words.forEach(word => {
        singleSentence = `${singleSentence} ` + `${word}`
    });
    console.log("singleSentence: ", singleSentence);
    console.log("singleSentence length: ", singleSentence.length);
    // newSentence.push(singleSentence.)
    while(singleSentence.length/maxWidth >= maxWidth){
        newSentence.push(singleSentence.slice)
    }
};

fullJustify(words, maxWidth);