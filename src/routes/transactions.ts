import { FastifyInstance } from 'fastify'
import crypto from 'node:crypto'
import { knex } from '../database'

export async function transactionRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'transação de teste',
        amount: 1000.0,
      })
      .returning('*')

    return await knex('transactions').select('*')
  })
}
