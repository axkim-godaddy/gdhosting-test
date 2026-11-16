const { test } = require('node:test');
const assert = require('node:assert');

test('basic math operations', () => {
  assert.strictEqual(2 + 2, 4);
  assert.strictEqual(10 - 5, 5);
});

test('string operations', () => {
  const str = 'Hello, World!';
  assert.strictEqual(str.includes('World'), true);
  assert.strictEqual(str.toLowerCase(), 'hello, world!');
});

test('array operations', () => {
  const arr = [1, 2, 3, 4, 5];
  assert.strictEqual(arr.length, 5);
  assert.strictEqual(arr.includes(3), true);
  assert.deepStrictEqual(arr.slice(0, 3), [1, 2, 3]);
});
