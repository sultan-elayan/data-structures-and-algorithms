"use strict";
 

let reverseList = function(head) {
    if(head == null || head.next == null) {
        return head
    }
    newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
