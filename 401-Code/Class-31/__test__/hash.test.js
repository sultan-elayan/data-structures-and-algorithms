'use strict'
const Hashmap = require('../hashmap-repeated-word')

describe('Hashmap ', () => {

    it('Return the word that repeated in paragraph 1', () => {

        let newHash = new Hashmap(1024);
        let repeatedValue = newHash.repeatedWord('Once upon a time, there was a brave princess who...'.toLowerCase());
    
        expect(repeatedValue).toEqual({"a": "a"});
       
    })
  

})