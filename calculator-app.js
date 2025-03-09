const operators = ["+", "-", "*", "/"];

//"2+2-1*5-5+20+20"

function calculate(userInput){
    let userInputArr = [];
    let result = 0;
    const array = userInput.split(/(\D)/).filter(Boolean);
    userInputArr = array;
    console.log(userInputArr);
    for(let i = 0; i < userInput.length; i++){

        // if(operators.includes(userInput[i+1]) || operators.includes(userInput[i])){
        //     userInputArr.push(userInput[i]);
        // }else{
        //     // console.log(userInput[i], userInputArr.push(userInput[i+1]));
            
        //     if(userInput[i+1]){
        //         userInputArr.push(userInput[i] + userInput[i+1]);
        //     }
            
        // }

        

        // let doubleDigit = false;
        // if(!operators.includes(userInput[i]) && !(operators.includes(userInput[i]+1))){
        //     // console.log(userInput[i] + " " + userInput[i]+1);
        //     console.log(operators.includes(userInput[i]), userInput[i]);
            
        //     console.log("inside if");
        //     console.log(!operators.includes(userInput[i]+1));
        //     doubleDigit = true;
        // }
        // console.log(doubleDigit, i);
        
        // if(doubleDigit){
        //     console.log(!operators.includes(userInput[i]+1));
            
        //     console.log("inside double");
            
        //     userInputArr.push(userInput[i] + userInput[i]+1);
        //     i++;
        //     break;
        // }

        //working for single digit
        // userInputArr.push(userInput[i]);
    }
    console.log(userInputArr);
    // const operatorIndex = userInputArr.findIndex(item => item === )
    for(let [index, item] of userInputArr.entries()){
        if(operators.includes(item)){
            if(item === "+"){
                if(operators.includes(userInputArr[index-2])){
                    result = add(result, userInputArr[index+1]);
                    console.log("result add if: ", result);
                    
                }else{

                    result = result + add(userInputArr[index-1], userInputArr[index+1]);
                    console.log("result add else: ", result);
                }
            }else if(item === "-"){
                if(operators.includes(userInputArr[index-2])){
                    // 2 + 2 - 1
                    result = substract(result, userInputArr[index+1]);
                    console.log("result sub if: ", result);
                }else{
                    result = result + substract(userInputArr[index-1], userInputArr[index+1]);
                    console.log("result sub else: ", result);
                }
            }
            else if(item === "*"){
                if(operators.includes(userInputArr[index-2])){
                    // 2 + 2 - 1
                    result = multiply(result, userInputArr[index+1]);
                    console.log("result multiply if: ", result);
                }else{
                    result = result + multiply(userInputArr[index-1], userInputArr[index+1]);
                    console.log("result multiply else: ", result);
                }
            }
            else if(item === "/"){
                if(operators.includes(userInputArr[index-2])){
                    // 2 + 2 - 1
                    result = division(result, userInputArr[index+1]);
                    console.log("result div if: ", result);
                }else{
                    result = result + division(userInputArr[index-1], userInputArr[index+1]);
                    console.log("result div else: ", result);
                }
            }
        }
    }
    return result;
}

function add(a, b){
    console.log(a,b);
    
    return Number(a) + Number(b);
}

function substract(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a) * Number(b);
}

function division(a, b){
    return Number(a) / Number(b);
}

// const calResult = calculate("1+2*5");
// const calResult = calculate("2+2-1*5-5+20+20+152+85-24+25418");
const calResult = calculate("20+20-30*40/2");
console.log(calResult);
