import Head from "next/head";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import "../styles/globals.css";
import FloatingCart from "../components/FloatingCart";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <main className="flex flex-col items-center">
        <ShoppingCartProvider>
          <Navbar />
          <Component {...pageProps} />
          {router.asPath !== "/cart" && <FloatingCart />}
        </ShoppingCartProvider>
      </main>
    </>
  );
}
