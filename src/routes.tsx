import { Hono } from 'hono'
import Layout from './views/__layout'
import HomePage from './views/home'
import db from './config/db'
import { Product, User } from './config/types'
import { mapResultSet } from './utils'
import ProductsPage from './views/products'

const routes = new Hono()

routes
  .get('/', async (c) => {
    const rs = await db.execute('select * from users')
    const users = mapResultSet<User>(rs)
    return c.html(
      <Layout head={<link rel='stylesheet' href='css/home.css' />}>
        <HomePage users={users} />
      </Layout>
    )
  })
  .get('/products', async (c) => {
    const rs = await db.execute('select * from products')
    const products = mapResultSet<Product>(rs)
    return c.html(
      <Layout head=''>
        <ProductsPage products={products} />
      </Layout>
    )
  })

export default routes
