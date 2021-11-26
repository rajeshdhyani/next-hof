import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div class="sticky top-0 z-50">
     
    <Topbar></Topbar>
    
     <Navbar></Navbar>
    
    </div>
    
    <Component {...pageProps}></Component> 
    
   
    
  
    </>
    )
}

export default MyApp
