import styles from '../styles/Home.module.css'
import { card } from '../components/card.js';
export default function Cards(props)
{

  const {textContent,thumbnailUrl, ...rest} = props;
  
    console.log(thumbnailUrl);
    return(

        <div {...rest}>
        
        <div className="flex justify-between  border border-grey-300 bg-white  w-full  mt-4">
          
          
          <div className="p-4  text-gray-400 w-full">
          <span className="float-right pb-4 text-xs font-semibold text-green-400 ">Featured</span>
          <img src={thumbnailUrl} className=" w-auto h-auto object-cover"></img>
          
         
            <p className="pt-8 font-light text-gray-600">{textContent} 
            </p>
            
            <a href="#">
            <span className="float-right items-center pt-4"><img src="https://img.icons8.com/material-rounded/24/000000/right.png"/></span>
            <span className="float-right pr-2 pt-4 text-blue-800 text-sm font-semibold">LEARN MORE</span> 
          </a>

          </div>

          

          
        </div>  
        
          

        </div> 

    )


}
