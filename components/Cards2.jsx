import styles from '../styles/Home.module.css'
import { card } from '../components/card.js';
export default function Cards()
{
    
    return(

        <>
        
        <div class="flex justify-between  border border-grey-300 bg-white shadow-xl w-full  mt-4">
          
          
          <div class="p-4  text-gray-400 w-full">
          <span class="float-right pb-4 text-xs font-semibold text-green-400 ">Featured</span>
          <img src="2.jpg" class=" w-auto h-auto object-cover"></img>
          
         
            <p class="pt-8 font-light text-gray-600">text for testingtext for testingtext for testingtext for testingtext for testingtext 
            text for testingtext for testingtext for testingtext for testingtext for testingtext 
            text for testingtext for testingtext for testingtext for testingtext for testingtext 
            text for testingtext for testingtext for testingtext for testingtext for testingtext 
            </p>
            
            <a href="#">
            <span class="float-right items-center pt-4"><img src="https://img.icons8.com/material-rounded/24/000000/right.png"/></span>
            <span class="float-right pr-2 pt-4 text-blue-800 text-sm font-semibold">LEARN MORE</span> 
          </a>

          </div>

          

          
        </div>  
        
          

        </> 

    )


}
