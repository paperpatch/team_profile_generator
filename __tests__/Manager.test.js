const Manager = require('../lib/Manager');

jest.mock('../lib/Manager.js');

test('creates a manager object', () => {
  const manager = new Manager('Pat');

  expect(manager.name).toBe('Pat');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringContaining('@placeholder.com'));
  expect(manager.officeNumber).toEqual(expect.stringContaining('1234567890'));
});

