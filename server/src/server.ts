import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()

  return users
})

const config = {
  port: 3333,
}

app.listen(config).then(() => {
  console.log(`HTTP server running on http://localhost:${config.port}`)
})
