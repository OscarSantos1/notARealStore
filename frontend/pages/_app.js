import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import FloatingCart from '../components/FloatingCart'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <main className='flex flex-col items-center'>
      <ShoppingCartProvider>
        <Navbar />
        <Component {...pageProps} />
        {router.asPath !== '/cart' && <FloatingCart />}
      </ShoppingCartProvider>
    </main>
  )
}