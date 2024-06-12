const get = require('../api/get-funcionario.js');

test('testar get', () => {
  expect(get.list()).toBe(x => x.statusCode == 200);
})