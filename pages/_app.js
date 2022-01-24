import 'tailwindcss/tailwind.css'
import Head from "next/head";
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
import styles from '../styles/Home.module.css'
import StrapiClient from '../lib/strapi-client'

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
    
     <Navbar divisions={pageProps.divisions}></Navbar>
    
    </div>
    
    <Component {...pageProps}></Component> 
    
   
    
  
    </>
    )
}

export default MyApp

const client=new StrapiClient();
export const getStaticProps =async() => {
console.log('entered dropdown getStaticProps')
  
  const divisions =await client.fetchData('/divisions');
  
  console.log(divisions)
  
  
  return{
    props:{
      
      divisions:divisions,
      
     

    }
  }
}