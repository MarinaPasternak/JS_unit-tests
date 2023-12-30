import { it, expect } from "vitest";
import { transformToNumber } from './src/util/numbers';

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

