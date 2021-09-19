'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) {
       
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.size++;
            return;
        }
        let current = this.head;
        this.size++;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
        this.size2 = 0;
    }
    hash(key) {
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0) * 1000 % this.size;
    }
    add(key, value) {
        let hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key]: value }
        this.map[hash].append(entry);
        this.size2++;
        return hash

    }
    get(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {

            let cur = this.map[hash].head;
            while (cur) {
                if (Object.keys(cur.value) == key)
                    return cur.value
                cur = cur.next
            }
        }
        return 'Exception'

    }
    contains(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {
            let cur = this.map[hash].head;
            while (cur) {
                if (Object.keys(cur.value) == key)
                    return true
                cur = cur.next
            }
        }
        return false
    }

    repeatedWord(word) {
        let repeatedWord = word.split(' ');
        let arr = [];
        for (let index = 0; index < repeatedWord.length; index++) {
            let hashValue = hashmap.add(repeatedWord[index], repeatedWord[index]);
            arr.push(hashValue);
            for (let index = 0; index < arr.length; index++) {
                if (hashmap.map[arr[index]].size > 1)
                    return hashmap.map[arr[index]].head.value;
            }
        }
    }
}

const hashmap = new Hashmap(1024);
module.exports = Hashmap;