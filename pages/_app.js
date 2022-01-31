import React from 'react'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
import StrapiClient from '../lib/strapi-client'

function MyApp({ Component, pageProps }) {

  const [selectedDivision,setSelectedDivision]=React.useState(pageProps?.divisions[0].divisionName);
  
  const handleSelectedDivisionChange=React.useCallback((division)=>{


    setSelectedDivision(division)



  }, [])

  
  return (
    <>
    <div className="sticky top-0 z-50">

          
    <Topbar></Topbar>
    
     <Navbar divisions={pageProps.divisions} selectedDivision={selectedDivision} onSelectedDivisionChange={handleSelectedDivisionChange}></Navbar>
    
    </div>
    
    <Component {...pageProps} selectedDivision={selectedDivision}></Component> 
    
   
    
  
    </>
    )
}

export default MyApp


