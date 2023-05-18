import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes)

const config = {
  port: 3333,
}

app.listen(config).then(() => {
  console.log(`HTTP server running on http://localhost:${config.port}`)
})
