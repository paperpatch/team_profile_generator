const Manager = require('../lib/Manager');

test('creates manager values', () => {
  const manager = new Manager('Pat', 123, "test@test.com", 1234567890);

  expect(manager.name).toBe('Pat');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringContaining('@test.com'));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks if Manager role overrides Employee', () => {
  const manager = new Manager('Pat', 123, "test@test.com", 1234567890);

  // expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})