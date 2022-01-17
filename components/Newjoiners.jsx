import styles from '../styles/Home.module.css'
import { card } from '../components/card.js';
export default function Cards()
{
    
    return(

        <>
        
        <div class="flex justify-between  border border-grey-300 bg-white w-lg  mt-4">
        <div class="pt-4 bg-white w-auto h-32 md:w-auto justify-center items-center shadow pt-2 px-4 py-4 flex flex-col">
	        <img src="profile_pic.jpg" alt="img" title="img" class="rounded-full h-16 w-16 object-cover border-2 border-gray-200" ></img>
	        <h4 class="mt-2 text-xs  border-b-2" >Kudir Chandra sekar rao</h4>
	        <div class="mb-2 text-xs  text-center capitalize">UX Designer</div>
        </div>
        </div>

        </> 

    )


}
