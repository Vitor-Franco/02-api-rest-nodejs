import { expect, test, beforeAll, afterAll, describe } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Transaction Routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(() => {
    app.close()
  })

  test('User can create a new transaction', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'Salario',
      type: 'credit',
      amount: 1000,
    })

    expect(response.status).toBe(201)
  })
})
