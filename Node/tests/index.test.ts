import {sumNumbers} from "../index"

test('Adds 1 + 3 to equal 4', () => {
    expect(sumNumbers(1, 3)).toBe(4);
});