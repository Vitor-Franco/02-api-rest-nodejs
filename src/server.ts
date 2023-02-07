import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

app.register(fastifyCookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is running')
  })
