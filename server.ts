import app from './src/app'

const server = Bun.serve({
  port: process.env.PORT || 8000,
  fetch: app.fetch,
})

app.showRoutes()
console.log(`Environment: ${process.env.NODE_ENV}`)
console.log(`Server started on http://${server.hostname}:${server.port}`)
