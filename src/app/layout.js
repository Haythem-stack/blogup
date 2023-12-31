import { Inter } from 'next/font/google'
import Navbar from './components/navbar/page'
import Footer from './components/footer/page'
import { ThemeContextProvider } from './context/context'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin:"0", padding:"0"}}>
        <ThemeContextProvider>
      <Navbar />
        {children}
      <Footer />
      </ThemeContextProvider>
        </body>
    </html>
  )
}
