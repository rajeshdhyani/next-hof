import 'tailwindcss/tailwind.css'
import Head from "next/head";
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="sticky top-0 z-50">

      <Head>
      <link
            rel="preload"
            href="/fonts/Akkurat/Akkurat-Regular.otf"
            as="font"
            crossOrigin=""
          />

      </Head>
     
    <Topbar></Topbar>
    
     <Navbar></Navbar>
    
    </div>
    
    <Component {...pageProps}></Component> 
    
   
    
  
    </>
    )
}

export default MyApp
