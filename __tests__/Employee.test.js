const Employee = require('../lib/Employee');

test('creates employee values', () => {
  const employee = new Employee('Pat', 123, "test@test.com");

  expect(employee.name).toBe('Pat');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining('@test.com'));
});

test('checks the Employee role is Employee', () => {
  const employee = new Employee('Pat', 123, "test@test.com");

  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})