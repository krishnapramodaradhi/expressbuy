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
      <link rel='stylesheet' href='css/global.css' />
      {head}
    </head>
    <body>
      <main>{children}</main>
    </body>
  </html>
)

export default Layout
