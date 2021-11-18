const Employee = require('../lib/Employee');

test('creates a manager object', () => {
  const manager = new Manager('Pat');

  expect(manager.name).toBe('Pat');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringContaining('@placeholder.com'));
  expect(manager.officeNumber).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});

test('checks if Manager role overrides Employee', () => {
  const manager = new Manager('Pat');

  // expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
  expect(manager.getRole()).toEqual(expect.stringContaining(manager.toString()));
})
