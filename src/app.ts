import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

app.register(fastifyCookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})

export { app }
