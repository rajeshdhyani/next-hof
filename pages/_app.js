import Head from "next/head";
import 'tailwindcss/tailwind.css'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
<<<<<<< HEAD
import styles from '../styles/Home.module.css'
import StrapiClient from '../lib/strapi-client'

function MyApp({ Component, pageProps }) {

  
=======
import React from 'react';

function MyApp(props) {
  const {Component, pageProps, ...rest} = props;

  console.log('pageProps from App', props)
>>>>>>> 15aa7e1b944916f570dae730a06bf8b1f4d9f9ea
  return (
    <>
    <div className="sticky top-0 z-50">

          
    <Topbar></Topbar>
    
     <Navbar divisions={pageProps.divisions}></Navbar>
    
    </div>
    
    <Component {...pageProps}></Component> 
    
   
    
  
    </>
    )
}

export default MyApp

<<<<<<< HEAD
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
=======
>>>>>>> 15aa7e1b944916f570dae730a06bf8b1f4d9f9ea
