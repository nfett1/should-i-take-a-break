const myPackage = require('../index.js');

describe('myPackage', () => {
  test('returns "Yes" or "No"', () => {
    const result = myPackage();
    expect(result).toMatch(/^(Yes|No)$/);
  });
});