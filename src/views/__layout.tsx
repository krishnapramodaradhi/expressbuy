import { FC } from 'hono/jsx'

type LayoutProps = {
  head: string
  title?: string
}

const Layout: FC<LayoutProps> = ({ children, head, title = 'ExpressHub' }) => (
  <html lang='en'>
    <head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{title}</title>
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='favicon-16x16.png'
      />
      <link rel='manifest' href='site.webmanifest' />
      <link rel='stylesheet' href='css/global.css' />
      {head}
    </head>
    <body>
      <header>
        <nav class='navbar'>
          <div class='logo-container'>
            <a href='/' class='logo'>
              <img src='logo.png' alt='expressbuy logo' />
            </a>
          </div>
          <div class='search-container'>
            <input type='text' placeholder='Search for Products...' />
          </div>
          <ul class='nav-items'>nav items</ul>
        </nav>
      </header>
      <main>{children}</main>
    </body>
  </html>
)

export default Layout
