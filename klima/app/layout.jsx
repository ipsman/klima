import './globals.css'
import Head from './head'

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className='scroll-smooth transition-all duration-500'>
      <Head />
      <body>{children}</body>
    </html>
  )
}
