"use strict";


const LinkedList = require("../index");


describe("linked-list TEST ", () => {
  
  it("returns the value of a given index from the end of linked list", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("3");
    ll.append("8");
    ll.append("2");

    expect(ll.kthFromEnd(0)).toEqual("2");
    expect(ll.kthFromEnd(2)).toEqual("3");
    expect(ll.kthFromEnd(10)).toEqual(
      "Where k is greater than the length of the linked list"
    );
    expect(ll.kthFromEnd(-5)).toEqual("empty linked list");
  });

  it("test if -ve k or very large number", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("3");
    ll.append("8");
    ll.append("2");

    expect(ll.kthFromEnd(0)).toEqual("2");
    expect(ll.kthFromEnd(2)).toEqual("3");
    expect(ll.kthFromEnd(10)).toEqual(
      "Where k is greater than the length of the linked list"
    );
    expect(ll.kthFromEnd(-5)).toEqual("empty linked list");
    
  });
});
