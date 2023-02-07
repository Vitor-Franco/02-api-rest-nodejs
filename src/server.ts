import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'transação de teste',
      amount: 1000.0,
    })
    .returning('*')

  return await knex('transactions').select('*')
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server is running')
  })
