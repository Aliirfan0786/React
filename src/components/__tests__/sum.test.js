import { sum } from "../Sum";

test('this function should return the sum of two number', () => { 

    const result = sum(3,4)
    expect(result).toBe(11);
 })