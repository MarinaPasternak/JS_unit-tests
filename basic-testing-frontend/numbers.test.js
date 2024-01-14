import { it, expect, describe } from "vitest";
import { transformToNumber, cleanNumbers, describe } from './src/util/numbers';

it('should transform string to number', () => {
    const stringNumber = '1';
    const result = transformToNumber(stringNumber);
    expect(result).toBe(+stringNumber);
});

it('should yield NaN for non-transformable values', () => {
    const str = 's';
    const emptyObject = {};

    const resultStr = transformToNumber(str);
    const resultEmptyObject = transformToNumber(emptyObject);

    expect(resultStr).toBeNaN();
    expect(resultEmptyObject).toBeNaN();
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
      const numberValues = ['1', '2'];
  
      const cleanedNumbers = cleanNumbers(numberValues);
  
      expect(cleanedNumbers[0]).toBeTypeOf('number');
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const numberValues = ['', 1];
    
        const cleanFn = () => cleanNumbers(numberValues);
    
        expect(cleanFn).toThrow();
    })
});
