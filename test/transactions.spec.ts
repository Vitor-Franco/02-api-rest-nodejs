import { expect, it, beforeAll, afterAll, describe, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

describe('Transaction Routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(() => {
    app.close()
  })

  beforeEach(async () => {
    // Objetivo: Ter um banco de dados limpo antes de cada teste para isolar os testes
    execSync('npm run knex migrate:rollback --all') // Desfazer todas as migrations
    execSync('npm run knex migrate:latest') // Rodar todas as migrations
  })

  it('should be able to create a new transaction', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'Salario',
      type: 'credit',
      amount: 1000,
    })

    expect(response.status).toBe(201)
  })

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Salario',
        type: 'credit',
        amount: 1000,
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'Salario',
        amount: 1000,
      }),
    ])
  })
})
