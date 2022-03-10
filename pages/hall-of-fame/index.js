import Carousel from '../../components/Carousel'
import StrapiClient from '../../lib/strapi-client'
import config from '../api/config'
import SearchBar from '../../components/SearchBar';
import ProfileCard from '../../components/ProfileCard';
// import ReactPlayer from 'react-player';
import showIf from '../../helpers/showIf'
import React from 'react'
import { FaPowerOff } from "react-icons/fa";
import Button from '../../components/ui/button';
import Head from 'next/head';

const BASE_IMG_URL = config.BASE_IMAGE_URL;
export default function hof({ starAwardees, divisions, selectedDivision }) {
  //console.log("divisions: ", divisions)
  const [divisionalStarAwardees, setDivisionalStarAwardees] = React.useState()
  React.useEffect(() => {
    // console.log("Entered HOF UseEffect", starAwardees)
    setDivisionalStarAwardees(starAwardees.filter(starAwardee => starAwardee.divisions.divisionName === selectedDivision))
  }, [selectedDivision, starAwardees])
  console.log("Entered HOF dropdown", selectedDivision)
  const [value, setValue] = React.useState(true)
  return (
    <>
    <Head>
      <title>Hall of Fame</title>
    </Head>
      <div className="flex justify-center w-full relative" >
        <div className="grid grid-cols-1 gap-6">
          {showIf(value)(
            <div><Carousel></Carousel>
            </div>
          )}
          <span className="flex flex-col justify-center items-center my-0">
            <button className="bg-blue-500 w-xs hover:bg-blue-700 text-white items-center font-bold py-2 px-4" name="set buttun name" onClick={() => setValue(!value)}>
              <FaPowerOff />
            </button>
          </span>
          <div className="mx-auto">            
            <div className='bg-gray-200 grid grid-cols-2 gap-2 p-4'>
            <form className='w-auto grid grid-cols-4 gap-2 p-4 col-span-1'>
                  <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" >
                    <option value="">Select Year</option>
                    <option value="Q1">2019</option>
                    <option value="Q2">2020</option>
                    <option value="Q3">2021</option>
                    <option value="Q4">2022</option>
                  </select>
                <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" >
                  <option value="">Select Quarter</option>
                  <option value="Q1">Q1</option>
                  <option value="Q2">Q2</option>
                  <option value="Q3">Q3</option>
                  <option value="Q4">Q4</option>
                </select>
              <Button href="/#" className="bg-blue-700 w-4/12 min-w-min hover:bg-blue-700 text-white text-center font-bold px-4 py-2" >Filter</Button>
              </form>
              <SearchBar className="place-self-end"></SearchBar>
            </div>
            
          </div>
          <div className="grid md:grid-cols-6 gap-4 mx-auto">
          {/* <div className="grid grid-flow-col auto-cols-auto auto-rows-auto mx-auto pl-20 pr-20"> */}
            {divisionalStarAwardees?.map((starAwardee, index) =>
              <ProfileCard key={index}
                title={starAwardee?.Awardee_name}
                image={`${BASE_IMG_URL}${starAwardee?.profile_pic.url}`}
                likes={starAwardee?.likes}
                citation={starAwardee?.Citation}
                division={starAwardee?.divisions.divisionName}
              />)}
          </div>
        </div>
      </div>
    </>
  )
}
const client = new StrapiClient();
export const getStaticProps = async () => {
  console.log('entered hof getStaticProps')
  const starAwardees = await client.fetchData('/star-awardees');
  const divisions = await client.fetchData('/divisions');

  return {
    props: {
      starAwardees: starAwardees,
      divisions: divisions,
    }
  }
}
