import styles from '../styles/Home.module.css'
import { card } from '../components/card.js';
export default function Cards()
{
    
    return(

        <>
        
        <div className="flex justify-between  border border-grey-300 bg-white  w-full  mt-4">
          <img src="1.jpg" className=" w-1/4 h-auto object-cover p-4 "></img>
          
          <div className="p-4  text-gray-400 w-4/5">
          <span className="float-right pr-0 text-xs font-semibold text-green-400 ">Featured</span>

          <div className="font-bold mt-4 text-2xl text-gray-900">Solutions</div>
         
            <p className="pt-2 font-light text-gray-600">text for testingtext for testingtext for testingtext for testingtext for testingtext 
            text for testingtext for testingtext for testingtext for testingtext for testingtext 
            
            </p>
            
            <a href="#">
            <span className="float-right items-center pt-4"><img src="https://img.icons8.com/material-rounded/24/000000/right.png"/></span>
            <span className="float-right pr-2 pt-4 text-blue-800 text-sm font-semibold">LEARN MORE</span> 
          </a>

          </div>

          

          
        </div>  
        
          

        </> 

    )


}
