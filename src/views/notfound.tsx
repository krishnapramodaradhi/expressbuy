import { Context } from 'hono'
import Layout from './__layout'

export const notFound = (c: Context) => {
  return c.html(
    <Layout head={<></>}>
      <h1>Not found</h1>
    </Layout>,
    404
  )
}
