

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }

    hash(key) {
        const sumCharCode = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashKey = (sumCharCode * 19) % this.size;
        return hashKey;
    }


    add(key, value) {

        let hash;
        if (typeof key == "number") {
            hash = key;
        } else {
            hash = this.hash(key);
        }

        if (!this.storage[hash]) {
            const ll = new LinkedList();
            ll.insert({ [key]: value });
            this.storage[hash] = ll; 
        } else {
            this.storage[hash].insert({ [key]: value });
        }
    }

    uniqueCharacters(string) {
        const arr = string.split("");
        let key;
        let hash;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== " ") {
                key = arr[i].toLowerCase();
                this.add(key, "noValue");
                hash = this.hash(key);
                if (this.storage[hash].head.next) {
                    return false;
                }
            }
        }
        return true;
    }
}

module.exports = Hashmap;