import { FC } from 'hono/jsx'
import { html } from 'hono/html'

type LayoutProps = {
  head: string
  title?: string
}

const Layout: FC<LayoutProps> = ({
  children,
  head,
  title = 'ExpressHub',
}) => html` <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link rel="stylesheet" href="css/global.css" />
      <link rel="stylesheet" href="css/layout.css" />
      ${head}
    </head>
    <body>
      <header>
        <nav class="navbar">
          <div class="logo-container">
            <a href="/" class="logo">
              <img src="logo.png" alt="xpressbuy logo" />
            </a>
          </div>
          <div class="search-container">
            <span class="material-symbols-outlined">search</span>
            <input
              type="text"
              id="search"
              placeholder="Search for Products..."
            />
          </div>
          <ul class="nav-items" role="list">
            <li>
              <a href="/products">
                <span class="material-symbols-outlined">storefront</span>
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="/signin">
                <span class="material-symbols-outlined">person</span>
                <span>Signin</span>
              </a>
            </li>
            <li>
              <a href="/cart">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span>Cart</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>${children}</main>
    </body>
  </html>`

export default Layout
