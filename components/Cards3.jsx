import styles from '../styles/Home.module.css'
import { card } from '../components/card.js';
export default function Cards()

{
    return(
        <>
        <div className="flex justify-between  border-l-4 border-green-300 bg-white w-full mt-4">
          <div className="p-8">
          <img src="profile_pic.jpg" className=" rounded-full border-2 border-gray-200 w-28 h-28 object-cover"></img>
          </div>
          <div className="p-4  text-gray-400 w-4/5">
            <div className="font-bold mt-4 text-2xl text-gray-900">2nd Patent</div>
            <p className="pt-2 font-light text-gray-600">text for testingtext for testingtext for testingtext for testingtext for testingtext 
            text for testingtext for testingtext for testingtext for testingtext for testingtext 
            </p>
          </div>
        </div>  
        </> 
    )
}
