import { Context, Hono } from 'hono'
import Layout from './views/__layout'
import HomePage from './views/home'

const routes = new Hono()

routes.get('/', (c) =>
  c.html(
    <Layout head={<link rel='stylesheet' href='css/home.css' />}>
      <HomePage />
    </Layout>
  )
)

export default routes
