"use strict";
const Hashmap = require('../uniqueCharacters.js');

describe("unique characters TESTS", () => {

  it("1.successfully check all Strings if they are unique or not", () => {
    let hashTable = new Hashmap(5000);

    let string = "The quick brown fox jumps over the lazy dog";
    expect(hashTable.uniqueCharacters(string)).toEqual(false);
  });

 
  it("2.successfully check all Strings if they are unique or not", () => {
    let hashTable = new Hashmap(5000);

    let string = "I love cats";
    expect(hashTable.uniqueCharacters(string)).toEqual(true);
  });


  it("3.successfully check all Strings if they are unique or not", () => {
    let hashTable = new Hashmap(5000);

    let string = "Donald the duck	";
    expect(hashTable.uniqueCharacters(string)).toEqual(false);
  });
});