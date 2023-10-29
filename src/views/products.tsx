import { FC } from 'hono/jsx'
import { Product } from '../config/types'

const ProductsPage: FC<{ products: Product[] }> = () => <div>Products</div>

export default ProductsPage
