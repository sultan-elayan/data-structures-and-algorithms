'use strict';

const quickSort= require ('../quickSort');

describe('quickSort function()', () => {
    it('quick Sort test 1 ', () => {
      let array=[5,3,7,6,2,9];
      expect(quickSort(array)).toEqual([2, 3, 5, 6, 7, 9]);
    });


    it('quick Sort test 2 ', () => {
      let array=[12, 16, 13, 11, -3];
      expect(quickSort(array)).toEqual([-3, 11, 12, 13, 16]);
    });
  
  
  
  });