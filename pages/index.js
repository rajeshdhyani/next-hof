import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel.jsx'
import Cards from '../components/Cards.jsx'
import Cards2 from '../components/Cards2.jsx'
import Cards3 from '../components/Cards3.jsx'
import Newjoiners from '../components/Newjoiners.jsx'
export default function Home() {
  return (
    <>
   <div class="flex justify-center w-full relative" >

  <div class="grid grid-cols-1 gap-6">
    <div><Carousel></Carousel></div>
        <div class="grid grid-cols-2 gap-8 ml-48 mr-48 ">
        <div class="w-11/12">
        <div class="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  "> Updates</div>
         <div class="bg-green-500"> <Cards></Cards></div>
         <div class="bg-green-500"> <Cards></Cards></div>
         <div> <Cards></Cards></div>
         <div class="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2 mt-8 "> New Joiners</div>
         <div class="grid grid-cols-4 gap-2 "> 
           <div><Newjoiners></Newjoiners></div>
           <div><Newjoiners></Newjoiners></div> 
           <div><Newjoiners></Newjoiners></div> 
           <div><Newjoiners></Newjoiners></div> 
          </div>
          <div class="grid grid-cols-4 gap-2 "> 
           <div><Newjoiners></Newjoiners></div>
           <div><Newjoiners></Newjoiners></div> 
           <div><Newjoiners></Newjoiners></div> 
           <div><Newjoiners></Newjoiners></div> 
          </div>
        </div>
        <div class="w-11/12 row-gap-12 ">
        <div class="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  "> Announcements</div>
        <div> <Cards2></Cards2></div>

        <div class="font-semibold text-2xl mt-8 text-gray-400 border-b-2 border-gray-100 w-full"> Patents</div>
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
