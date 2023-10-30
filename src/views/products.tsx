import { FC } from 'hono/jsx'
import { Product } from '../config/types'

const ProductsPage: FC<{ products: Product[] }> = ({ products }) => (
  <div>
    {products.map((product) => (
      <div class='card'>
        <div>
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div>{product.title}</div>
        <div>
          <p>{product.price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    ))}
  </div>
)

export default ProductsPage
