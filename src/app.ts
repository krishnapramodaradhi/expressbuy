import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

import pageRoutes from './routes'
import { notFound } from './views/notfound'

const app = new Hono()

app.route('/', pageRoutes)
app.notFound(notFound)
app.use('*', serveStatic({ root: './src/assets' }))

export default app
