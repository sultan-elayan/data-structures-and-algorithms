"use strict";
const LinkedList = require('../linkedList');

describe("linked-list tests ", () => {
  it("Can successfuLLy instantiate an empty linked list", () => {
    let LL = new LinkedList();
    expect(LL).toBeInstanceOf(LinkedList);
  });

  it("Can properly insert into the linked list", () => {
    let LL = new LinkedList();
    LL.insert("a");
    expect(LL.head).toBeTruthy();
  });

  it("The head property wiLL properly point to the first node in the linked list", () => {
    let LL = new LinkedList();
    LL.insert("a");
    expect(LL.head.value).toEqual("a");
  });

  it("Can properly insert multiple nodes into the linked list", () => {
    let LL = new LinkedList();
    LL.insert("a");
    LL.insert("b");
    LL.insert("c");
    LL.insert("d");

    expect(LL.head.value).toEqual("d");
  });
});

describe("tests group 2", () => {
  it("Can properly return a coLLection of aLL the values that exist in the linked list", () => {
    let LL = new LinkedList();
    LL.insert("a");
    LL.insert("b");
    LL.insert("c");
    
    expect(LL.includes("a")).toEqual(true);
  });

  it("WiLL return false when searching for a value in the linked list that does not exist", () => {
    let LL = new LinkedList();
    LL.insert("test1");
    LL.insert("test2");
    LL.insert("test3");
    LL.insert("test4");
    

    expect(LL.includes("test6")).toEqual(false);
  });

  it("Can properly return a coLLection of aLL the values that exist in the linked list", () => {
    let LL = new LinkedList();
    LL.insert("test1");
    LL.insert("test2");
    LL.insert("test3");
  
    expect(LL.toString()).toEqual("{test3} ->{test2} ->{test1} ->NULL");

  });
});