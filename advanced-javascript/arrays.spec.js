const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  
  describe('each', () => {
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(typeof each).toBe('function');
    });
    it('should iterate over elements', () => {
      expect(arrayFunctions.each([6, 7, 8, 9], item => item)).toEqual(undefined)
      const arr = [6, 7, 8, 9];
      const actual = each(arr, addElements);
      expect(actual).toBeUndefined();
    });
  });

  describe('map', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });
    it('should iterate over elements', () => {
      const arr = [6, 7, 8, 9];
      const actual = map(arr, addOne);
      const expected = [7, 8, 9, 10];
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(typeof reduce).toBe('function');
    });
    it('should iterate over elements', () => {
      const elements = [1, 2, 3, 4];
      const actual = reduce(elements, addElements);
      const expected = 10;
      expect(actual).toEqual(expected);
    });
  });

  // had to alter main arr.js file 
  describe('find', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(typeof find).toBe('function');
    });
    it('should iterate over elements', () => {
      const elements = [1, 2, 3, 4];
      const searchInput = 4;
      const actual = find(elements, compareElements, searchInput);
      const expected = 4;
      expect(actual).toEqual(expected);
    });
  });

  describe('filter', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(typeof filter).toBe('function');
    });
    it('should iterate over elements', () => {
      const arr = [1, 2, 3, 4, 4];
      const term = 4;
      const actual = filter(arr, compareElements, term);
      const expected = [4, 4];
      expect(actual).toEqual(expected);
    });
  });

  describe('flatten', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(typeof flatten).toBe('function');
    });
    it('should iterate over elements', () => {
      const elements = [1,2,3,4, [1, 'x'], 'y', 8 ];
      const actual = flatten(elements);
      const expected = [1, 2, 3, 4, 1, 'x', 'y', 8];
      expect(actual).toEqual(expected);
    });
  });

});
  
function addElements(x, y) {
  return x + y;
}

function addOne(x) {
  return x + 1;
}

function compareElements(x, y) {
  return x === y;
}