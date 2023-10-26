import { Hono } from 'hono'
import Layout from './views/__layout'
import HomePage from './views/home'
import db from './config/db'
import { User } from './config/types'

const routes = new Hono()

routes.get('/', async (c) => {
  const { rows, columns } = await db.execute('select * from users')

  return c.html(
    <Layout head={<link rel='stylesheet' href='css/home.css' />}>
      <HomePage />
    </Layout>
  )
})

export default routes
