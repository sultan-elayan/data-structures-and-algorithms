"use strict";

const Hashmap = require("../hashtable");

describe("hash table tests", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    let hashtable = new Hashmap(5);
    let expected = "test1";
    hashtable.add("name", "test1");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
  });

  it("Retrieving based on a key returns the value stored", () => {
    let hashtable = new Hashmap(5);
    let expected = "test1";
    hashtable.add("name", "test1");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
    expect(hashtable.get("hi")).toEqual(null);
  });

  it("Successfully handle a collision within the hashtable", () => {
    let hashtable = new Hashmap(5);
    hashtable.add("name", "test1");
    hashtable.add("mean", "test2");

    let operation = hashtable.map[hashtable.hash("name")].head.next.value["mean"];
    expect(hashtable.contain("mean")).toBe(true);
    expect(operation).toEqual("test2");
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashtable = new Hashmap(5);
    hashtable.add("name", "test1");
    hashtable.add("mean", "test2");

    let operation = hashtable.map[hashtable.hash("name")].head.next.value["mean"];
    expect(hashtable.get("mean")).toBe('test2');
    expect(operation).toEqual("test2");
  });

  it('Successfully hash a key to an in-range value',()=>{
    let hashtable = new Hashmap(5);
    let min=0;
    let max=4;
    let key='test1';
    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(min);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(max);
  })
});