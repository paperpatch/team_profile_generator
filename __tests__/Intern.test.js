const Intern = require('../lib/Intern');

test('creates intern values', () => {
  const intern = new Intern('Pat', 123, "test@test.com", "University");

  expect(intern.name).toBe('Pat');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.stringContaining('@test.com'));
  expect(intern.school).toEqual(expect.stringContaining(""));
});

test('checks if Intern role overrides Employee', () => {
  const intern = new Intern('Pat', 123, "test@test.com", 1234567890);

  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})