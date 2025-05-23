const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('incorrectly adds two numbers', () => {
	expect(sum(2, 3)).toBe(6);
});

test('adds negative numbers correctly', () => {
	expect(sum(-2, -3)).toBe(-5);
});

