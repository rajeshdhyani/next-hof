import Head from "next/head";
import 'tailwindcss/tailwind.css'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
import React from 'react';

function MyApp(props) {
  const {Component, pageProps, ...rest} = props;

  console.log('pageProps from App', props)
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

