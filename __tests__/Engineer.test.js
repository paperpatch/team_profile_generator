const Engineer = require('../lib/Engineer');

test('creates engineer values', () => {
  const engineer = new Engineer('Pat', 123, "test@test.com", "githubusername");

  expect(engineer.name).toBe('Pat');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.stringContaining('@test.com'));
  expect(engineer.github).toEqual(expect.stringContaining(""));
});

test('checks if Engineer role overrides Employee', () => {
  const engineer = new Engineer('Pat', 123, "test@test.com", 1234567890);

  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})