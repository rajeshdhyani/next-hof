import React from 'react';
import Carousel from '../../components/Carousel';
import Cards2 from '../../components/Cards2.jsx';
import StrapiClient from '../../lib/strapi-client';
import config from '../../api/config';
import Head from 'next/head';
import useAppContext from '../../store/AppContextProvider/useAppContext';
import Newjoiners from '../../components/Newjoiners';

const BASE_IMG_URL = config.BASE_IMAGE_URL;
export default function hof({ upcomingEvents, divisions, articles }) {
  const appContext = useAppContext();

  React.useEffect(() => {
    appContext.setDivisions(divisions);
    if (!appContext.selectedDivision) {
      appContext.setSelectedDivision(divisions[0].divisionName);
    }
  }, [appContext]);
  return (
    <>
      <Head>
        <title>Project Information</title>
      </Head>
      <div className="flex justify-center w-full relative">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Carousel></Carousel>
          </div>
          <div className="grid grid-cols-2 gap-8 ml-48 mr-48 ">
            <div className="w-11/12 row-gap-12 ">
              <h2 className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  ">
                Project information
              </h2>
              {upcomingEvents.map((upcomingEvent, index) => (
                <Cards2
                  key={index}
                  textContent={upcomingEvent.PPM_updates_textcontent}
                  thumbnailUrl={`${BASE_IMG_URL}${upcomingEvent.PPM_update_banner.url}`}
                />
              ))}
              {articles[0].Article_type === 'New joiner announcement' && <h4 className='font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  '>New Joiners</h4>}
              {articles.map((article) =>
              (<Newjoiners
                key={article?.id}
                title={article?.Title}
                text={article?.ContentText}
                image={`${BASE_IMG_URL}${article?.Banner.url}`}
              />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const client = new StrapiClient();
export const getStaticProps = async () => {
  const upcomingEvents = await client.fetchData('/ppm-updates');
  const divisions = await client.fetchData('/divisions');
  const articles = await client.fetchData('/articles');
  //const mainSliders = await client.fetchData('/hall-of-fame-sliders');
  return {
    props: {
      upcomingEvents: upcomingEvents,
      divisions: divisions,
      articles: articles,
      // mainSliders: mainSliders,
    },
  };
};
