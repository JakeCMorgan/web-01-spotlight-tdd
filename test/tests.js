// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    getLastItem,
    getSecondItem,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    returnAsAnArray,
    returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('should take in a number and return that number plus three exclamation points', (expect) => {
    const expected = 'hello world!!!';

    const actual = addExclamationPoints('hello world');

    expect.equal(actual, expected, 'hello world => hello world!!!');

    const expected2 = 'hello!!!';

    const actual2 = addExclamationPoints('hello');

    expect.equal(actual2, expected2, 'hello => hello!!!');

    const expected3 = 'Tada!!!';

    const actual3 = addExclamationPoints('Tada');

    expect.equal(actual3, expected3, 'Tada => Tada!!!');
});

test('should take in a number and return that number multiplied by 7', (expect) => {
    const expected = 70;

    const actual = multiplyBySeven('10');

    expect.equal(actual, expected, '7 * 10 should be 70, even if 10 is a string');

    const expected2 = 140;

    const actual2 = multiplyBySeven('20');

    expect.equal(actual2, expected2, '7 * 20 should be 140, even if 20 is a string');

    const expected3 = 14;

    const actual3 = multiplyBySeven('2');

    expect.equal(actual3, expected3, '7 * 2 should be 14, even if 2 is a string');
});

test('should take in a number and return that number multiplied by 12 then cut in half', (expect) => {
    const expected = 60;

    const actual = multiplyBy12ThenHalve('10');

    expect.equal(actual, expected, '10 * 12 / 2 should be 60, even if 10 is a string');

    const expected2 = 12;

    const actual2 = multiplyBy12ThenHalve('2');

    expect.equal(actual2, expected2, '2 * 12 / 2 should be 12, even if 12 is a string');

    const expected3 = 120;

    const actual3 = multiplyBy12ThenHalve('20');

    expect.equal(actual3, expected3, '20 * 12 / 2 should be 120, even if 20 is a string');
});

test('should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, '8 divided by 4 is 2, times 5 is 10');

    const expected2 = 25;

    const actual2 = divideThenMultiply(10, 2, 5);

    expect.equal(actual2, expected2, '10 divided by 2 is 5, times 5 is 25');

    const expected3 = 8;

    const actual3 = divideThenMultiply(20, 5, 2);

    expect.equal(actual3, expected3, '20 divided by 5 is 4, times 2 is 8');
});

test('should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [1, 2, 3];

    const actual = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual, expected, '123');

    const expected2 = [3, 2, 1];

    const actual2 = returnAsAnArray(3, 2, 1);

    expect.deepEqual(actual2, expected2, '321');

    const expected3 = [7, 3, 9];

    const actual3 = returnAsAnArray(7, 3, 9);

    expect.deepEqual(actual3, expected3, '739');
});

test('should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = 123;

    const actual = returnAsAString(1, 2, 3);

    expect.equal(actual, expected, '123 = 123');

    const expected2 = 321;

    const actual2 = returnAsAString(3, 2, 1);

    expect.equal(actual2, expected2, '321 = 321');

    const expected3 = 567;

    const actual3 = returnAsAString(5, 6, 7);

    expect.equal(actual3, expected3, '567 = 567');
});

test('should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(1, 2);

    expect.equal(actual, expected, 'Hello! Your lucky number for the day is 12.');

    const expected2 = 'Hello! Your lucky number for the day is 13.';

    const actual2 = makeLuckyGreeting(1, 3);

    expect.equal(actual2, expected2, 'Hello! Your lucky number for the day is 13.');

    const expected3 = 'Hello! Your lucky number for the day is 14.';

    const actual3 = makeLuckyGreeting(1, 4);

    expect.equal(actual3, expected3, 'Hello! Your lucky number for the day is 14.');
});

test('should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'apple');

    const expected2 = '2';

    const actual2 = getSecondItem(['1', '2', '3', '4']);

    expect.deepEqual(actual2, expected2, '2');

    const expected3 = 'green';

    const actual3 = getSecondItem(['blue', 'green', 'yellow', 'red']);

    expect.deepEqual(actual3, expected3, 'green');
});

test('should take an array and return the LAST item in the array, no matter the arrays length', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'plum');

    const expected2 = '4';

    const actual2 = getLastItem(['1', '2', '3', '4']);

    expect.deepEqual(actual2, expected2, '4');

    const expected3 = 'red';

    const actual3 = getLastItem(['blue', 'green', 'yellow', 'red']);

    expect.deepEqual(actual3, expected3, 'red');
});
