  
'use strict'
const Hashmap = require('../hashmap-repeated-word')

describe('Hashmap ', () => {

    it('Return the word that repeated in paragraph 1', () => {

        let newHash = new Hashmap(1024);
        let repeatedValue = newHash.repeatedWord('It was a queer, sultry summer ,the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'.toLowerCase());
    
        expect(repeatedValue).toEqual({"summer": "summer"});
       
    })
  

})