'use strict';

const insertionSort = require ('../InsertionSort');

describe('insertionSort function()', () => {
    it('insertionSort()', () => {
      let array=[8,4,23,42,16,15];
      expect(insertionSort(array)).toEqual([4, 8, 15, 16, 23,42]);
    });


    it('insertionSort()', () => {
      let array=[12, 16, 13, 11, -3];
      expect(insertionSort(array)).toEqual([-3, 11, 12, 13, 16]);
    });
  
  
  
  });