import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Carousel from '../components/Carousel.jsx';
import HeadMsgCard from '../components/HeadMsgCard.jsx';
import Cards2 from '../components/Cards2.jsx';
import Newjoiners from '../components/Newjoiners.jsx';
import StrapiClient from '../lib/strapi-client';
import ReactPlayer from 'react-player';
import React from 'react';
import config from '../api/config';
import DropdownList from '../components/ui/DropdownList';
import { v4 as uuid } from 'uuid';
import safeGet from '../helpers/safeGet';
import DropdownChoice from '../components/ui/DropdownChoice';
import useAppContext from '../store/AppContextProvider/useAppContext';
import Modal from 'react-modal';

Modal.setAppElement("#__next");
export default function Home({
  upcomingEvents,
  divisions,
  selectedDivision,
  mainSliders,
  headmsgs,
  headMsgContent,
  headMsgVideoUrl,
  sliders,
}) {
  const [divisionalUpcomingEvents, setDivisionalUpcomingEvents] = React.useState();
  const [divisionalHeadMessages, setDivisionalHeadMessages] = React.useState();
  const [divisionalSliders, setDivisionalSliders] = React.useState();

  const appContext = useAppContext();

  React.useEffect(() => {
    appContext.setDivisions(divisions);
    if (!appContext.selectedDivision) {
      appContext.setSelectedDivision(divisions[0].divisionName);
    }
  }, [appContext]);

  React.useEffect(() => {
    setDivisionalUpcomingEvents(upcomingEvents.filter(upcomingEvent => upcomingEvent.division.divisionName === appContext.selectedDivision))
    setDivisionalHeadMessages(headmsgs.filter(headmsg => headmsg.divisions.divisionName === appContext.selectedDivision))
    setDivisionalSliders(sliders.filter(slider => slider.divisions.divisionName === appContext.selectedDivision))
  }, [appContext, headmsgs, upcomingEvents, sliders])

  return (
    <>
      <div className="flex justify-center w-full relative">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Carousel></Carousel>
          </div>
          <div className="grid grid-cols-2 gap-8 ml-48 mr-48 ">
            <div className="w-11/12">
              <h2 className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2 ">
                {' '}
                Message from Leader
              </h2>
              <div className="bg-green-500">
                {divisionalHeadMessages?.map((headmsg, index) => (
                  <HeadMsgCard
                    key={index}
                    headMsgContent={headmsg.Head_Message}
                    headMsgVideoUrl={`${config.BASE_IMAGE_URL}${headmsg.HeadMsgVideo.url}`}
                  />
                ))}
              </div>
              <h2 className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  ">
                {' '}
                Updates
              </h2>
              {divisionalUpcomingEvents?.map((upcomingEvent, index) => (
                <Cards2
                  key={index}
                  textContent={upcomingEvent.PPM_updates_textcontent}
                  thumbnailUrl={`${config.BASE_IMAGE_URL}${upcomingEvent.PPM_update_banner.url}`}
                />
              ))}
              <h2 className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2 mt-8 ">
                {' '}
                New Joiners
              </h2>
              <div className="grid grid-cols-4 gap-2 "></div>
            </div>
            <div className="w-11/12 row-gap-12 ">
              <h2 className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  ">
                {' '}
                Upcoming Events
              </h2>
              {divisionalUpcomingEvents?.map((upcomingEvent, index) => (
                <Cards2
                  key={index}
                  textContent={upcomingEvent.PPM_updates_textcontent}
                  thumbnailUrl={`${config.BASE_IMAGE_URL}${upcomingEvent.PPM_update_banner.url}`}
                />
              ))}
              <div className="font-semibold text-2xl mt-8 text-gray-400 border-b-2 border-gray-100 w-full">
                {' '}
                Patents
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal isOpen={true}>In the modal</Modal> */}
    </>
  );
}
const client = new StrapiClient();
export const getStaticProps = async () => {
  const upcomingEvents = await client.fetchData('/ppm-updates');
  const divisions = await client.fetchData('/divisions');
  const headmsgs = await client.fetchData('/head-msgs');
  const sliders = await client.fetchData('/du-sliders');
  return {
    props: {
      upcomingEvents: upcomingEvents,
      divisions: divisions,
      headmsgs: headmsgs,
      sliders: sliders,
    },
  };
};