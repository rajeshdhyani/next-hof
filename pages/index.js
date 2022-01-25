import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel.jsx'
import Cards from '../components/Cards.jsx'
import Cards2 from '../components/Cards2.jsx'
import Cards3 from '../components/Cards3.jsx'
import Newjoiners from '../components/Newjoiners.jsx'
import StrapiClient from '../lib/strapi-client'

const BASE_IMG_URL=process.env.STRAPI_API_URL;

export default function Home({upcomingEvents,divisions,divisionName}) {

  
  return (
    <>
   <div className="flex justify-center w-full relative" >

  <div className="grid grid-cols-1 gap-6">
    <div><Carousel></Carousel></div>
        <div className="grid grid-cols-2 gap-8 ml-48 mr-48 ">
        <div className="w-11/12">
        <div className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  "> Updates</div>
         <div className="bg-green-500"> <Cards></Cards></div>
         <div className="bg-green-500"> <Cards></Cards></div>
         <div> <Cards></Cards></div>
         <div className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2 mt-8 "> New Joiners</div>
         <div className="grid grid-cols-4 gap-2 "> 
           <div><Newjoiners></Newjoiners></div>
           <div><Newjoiners></Newjoiners></div> 
           <div><Newjoiners></Newjoiners></div> 
           <div><Newjoiners></Newjoiners></div> 
          </div>
          <div className="grid grid-cols-4 gap-2 "> 
           <div><Newjoiners></Newjoiners></div>
           <div><Newjoiners></Newjoiners></div> 
           <div><Newjoiners></Newjoiners></div> 
           <div><Newjoiners></Newjoiners></div> 
          </div>
        </div>
        <div className="w-11/12 row-gap-12 ">
        <div className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  "> Upcomming Events</div>
        {upcomingEvents.map((upcomingEvent, index) => <Cards2 key={index} 
        textContent={upcomingEvent.PPM_updates_textcontent}
        thumbnailUrl={`${BASE_IMG_URL}${upcomingEvent.PPM_update_banner.url}`}
        
        
        />)}

        <div className="font-semibold text-2xl mt-8 text-gray-400 border-b-2 border-gray-100 w-full"> Patents</div>
        <div> <Cards3></Cards3></div>
        <div> <Cards3></Cards3></div>
        <div> <Cards3></Cards3></div>
        </div>
      </div>
    </div>
  </div>  
     
    </>
  )
}
const client=new StrapiClient();
export const getStaticProps =async() => {
console.log('entered index getStaticProps')
  const upcomingEvents =await client.fetchData('/ppm-updates');
  const divisions =await client.fetchData('/divisions');
  const mainSliders =await client.fetchData('/hall-of-fame-sliders');
  console.log(mainSliders)
  
  
  return{
    props:{
      upcomingEvents:upcomingEvents,
      divisions:divisions,
      mainSliders:mainSliders,
     

    }
  }
}
