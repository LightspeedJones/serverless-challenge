import { list } from '../api/get-funcionario.js';

test('deve retornar 200', async () => {
  const res = await list()
  expect(res.statusCode).toBe(200)
})