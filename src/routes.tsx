import { Hono } from 'hono'
import Layout from './views/__layout'
import HomePage from './views/home'
import db from './config/db'
import { User } from './config/types'
import { mapResultSet } from './utils'
import ProductsPage from './views/products'

const routes = new Hono()

routes
  .get('/', async (c) => {
    const rs = await db.execute('select * from users')
    const result = mapResultSet<User>(rs)
    return c.html(
      <Layout head={<link rel='stylesheet' href='css/home.css' />}>
        <HomePage users={result} />
      </Layout>
    )
  })
  .get('/products', (c) => {
    return c.html(
      <Layout head=''>
        <ProductsPage products={[]} />
      </Layout>
    )
  })

export default routes
