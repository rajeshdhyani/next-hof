import Carousel from '../components/Carousel.jsx'
import Cards2 from '../components/Cards2.jsx'
import StrapiClient from '../lib/strapi-client'
import config from './api/config'
import SearchBar from '../components/SearchBar';
import ProfileCard from '../components/ProfileCard';
import Dropdown from '../components/Dropdown.jsx';
import ReactPlayer from 'react-player';
import showIf from '../helpers/showIf'
import React from 'react'
import { FaPowerOff } from "react-icons/fa";




const BASE_IMG_URL=config.BASE_IMAGE_URL;

export default function hof({starAwardees,divisions}) {

  console.log("drop down in hof")
  const [value,setValue]=React.useState(true)

 return (
    <>
   <div className="flex justify-center w-full relative" >

  <div className="grid grid-cols-1 gap-6">
  

{showIf(value)(
   
    <div><Carousel></Carousel>
    
    </div>

    )}

<span className="flex flex-col justify-center items-center my-0">
<button className="bg-blue-500 w-xs hover:bg-blue-700 text-white items-center font-bold py-2 px-4" name="set buttun name" onClick={()=> setValue(!value)}>
    <FaPowerOff/>


</button>
</span>

        <div className="grid grid-cols-1 gap-8 ml-20 mr-20 ">
        
        <div className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  "> Hall of Fame</div>
       
        <div className='bg-gray-200 grid grid-cols-4 gap-8 flex items-center'>
          <SearchBar></SearchBar>
          <span className='ml-36 mr-px'>
          <Dropdown></Dropdown>
          </span>
          <span className='ml-36 mr-px'>
          <Dropdown></Dropdown>
          </span>         
          </div>
          </div>

          <div className="grid grid-cols-6 gap-4 ml-20 mr-20 "> 
          {starAwardees?.map((starAwardee, index) =>
        <ProfileCard key={index}
        title={starAwardee?.Awardee_name }
        image={`${BASE_IMG_URL}${starAwardee?.profile_pic.url}`}
        likes={starAwardee?.likes }
        citation={starAwardee?.Citation }
        division={starAwardee?.divisions.divisionName }
        
        />)}
       
        
      </div>
    </div>
  </div>  
     
    </>
  )
}
const client=new StrapiClient();
export const getStaticProps =async() => {
console.log('entered hof getStaticProps')
  const starAwardees =await client.fetchData('/star-awardees');
  const divisions =await client.fetchData('/divisions');
  
  
  
  return{
    props:{
      starAwardees:starAwardees.filter((item)=>item.divisions.divisionName === "PPM Product Centre"),
      divisions:divisions,
   

    }
  }
}
