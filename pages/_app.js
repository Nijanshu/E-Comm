import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Navex from '@/components/navex'
import '@/styles/globals.css'
import '@/styles/carousel.css'
import '@/styles/navex.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
 return <>
  <Navbar/>
  <Navex/>
  <Component {...pageProps} />
  <Footer/>
  </> 
}
