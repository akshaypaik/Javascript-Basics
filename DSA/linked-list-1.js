let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}  

let linkedList = {value: 1};
linkedList.next = {value:2};
linkedList.next.next = {value:3}
linkedList.next.next.next = {value:4}

linkedList = {value:0, next: linkedList};
console.log(linkedList);
