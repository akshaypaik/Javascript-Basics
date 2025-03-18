const pairs = {
    '[': ']',
    '{': '}',
    '(': ')'
}

const isValidParenthesis = (str) => {
    if(str.length % 2 === 1){
        return false;
    }
    if(str[str.length - 1] === '[' || str[str.length - 1] === '{' || str[str.length - 1] === '('){
        return false;
    }
    if(str[0] === ']' || str[0] === '}' || str[0] === ')'){
        return false;
    }
    let stack = [];
    for(let i=0; i<str.length; i++){
        if(str[i] === '[' || str[i] === '{' || str[i] === '('){
            stack.push(str[i]);
        }else if(pairs[stack.pop()] !== str[i]){
            return false;
        }
    }
    return stack.length === 0;
}
const str = "[{}]";
const result = isValidParenthesis(str);
console.log(result);
