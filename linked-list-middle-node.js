function findMiddle(head) {
    let slow = head;
    let fast = head;

    // Move `fast` pointer twice as fast as `slow` pointer
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // When `fast` reaches the end, `slow` is at the middle
    return slow;
}

class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(findMiddle(head).value); // Output: 3

// Create a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6
head.next.next.next.next.next = new ListNode(6);

console.log(findMiddle(head).value); // Output: 4

// Define a simple linked list node
// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// // Create a linked list 1 -> 2 -> 3 -> 4 -> 5
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// console.log(findMiddle(head).value); // Output: 3

// // Create a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6
// head.next.next.next.next.next = new ListNode(6);

// console.log(findMiddle(head).value); // Output: 4