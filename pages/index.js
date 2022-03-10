import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel.jsx'
import HeadMsgCard from '../components/HeadMsgCard.jsx'
import Cards from '../components/Cards.jsx'
import Cards2 from '../components/Cards2.jsx'
import Cards3 from '../components/Cards3.jsx'
import Newjoiners from '../components/Newjoiners.jsx'
import StrapiClient from '../lib/strapi-client'
import ReactPlayer from 'react-player'
import React from 'react'
import config from './api/config'

export default function Home({ upcomingEvents, divisions, selectedDivision, mainSliders, headmsgs, headMsgContent, headMsgVideoUrl, sliders }) {
  const [divisionalUpcomingEvents, setDivisionalUpcomingEvents] = React.useState()
  const [divisionalHeadMessages, setDivisionalHeadMessages] = React.useState()
  const [divisionalSliders, setDivisionalSliders] = React.useState()
  React.useEffect(() => {
    //console.log("Enetered Useeffect", upcomingEvents)
    setDivisionalUpcomingEvents(upcomingEvents.filter(upcomingEvent => upcomingEvent.division.divisionName === selectedDivision))
    setDivisionalHeadMessages(headmsgs.filter(headmsg => headmsg.divisions.divisionName === selectedDivision))
    setDivisionalSliders(sliders.filter(slider => slider.divisions.divisionName === selectedDivision))
  }, [selectedDivision, headmsgs, upcomingEvents, sliders])
  return (
    <>
      <div className="flex justify-center w-full relative" >
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Carousel></Carousel>
          </div>
          <div className="grid grid-cols-2 gap-8 ml-48 mr-48 ">
            <div className="w-11/12">
              <h2 className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2 "> Message from Leader</h2>
              <div className="bg-green-500">
                {divisionalHeadMessages?.map((headmsg, index) => <HeadMsgCard key={index}
                  headMsgContent={headmsg.Head_Message}
                  headMsgVideoUrl={`${config.BASE_IMAGE_URL}${headmsg.HeadMsgVideo.url}`}
                />)}
              </div>
              <h2 className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  "> Updates</h2>
              <h2 className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2 mt-8 "> New Joiners</h2>
              <div className="grid grid-cols-4 gap-2 ">
              </div>
            </div>
            <div className="w-11/12 row-gap-12 ">
              <h2 className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  "> Upcoming Events</h2>
              {divisionalUpcomingEvents?.map((upcomingEvent, index) => <Cards2 key={index}
                textContent={upcomingEvent.PPM_updates_textcontent}
                thumbnailUrl={`${config.BASE_IMAGE_URL}${upcomingEvent.PPM_update_banner.url}`}
              />)}
              <div className="font-semibold text-2xl mt-8 text-gray-400 border-b-2 border-gray-100 w-full"> Patents</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const client = new StrapiClient();
export const getStaticProps = async () => {
  const upcomingEvents = await client.fetchData('/ppm-updates');
  const divisions = await client.fetchData('/divisions');
  const mainSliders = await client.fetchData('/hall-of-fame-sliders');
  const headmsgs = await client.fetchData('/head-msgs');
  const sliders = await client.fetchData('/du-sliders');
  return {
    props: {
      upcomingEvents: upcomingEvents,
      divisions: divisions,
      mainSliders: mainSliders,
      headmsgs: headmsgs,
      sliders: sliders,
    }
  }
}
