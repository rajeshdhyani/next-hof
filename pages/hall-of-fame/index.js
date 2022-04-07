import Carousel from '../../components/Carousel';
import StrapiClient from '../../lib/strapi-client';
import config from '../../api/config';
import SearchBar from '../../components/SearchBar';
import ProfileCard from '../../components/ProfileCard';
// import ReactPlayer from 'react-player';
import showIf from '../../helpers/showIf';
import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import Button from '../../components/ui/button';
import Head from 'next/head';
import { AppContext } from '../../store/AppContextProvider';
import useAppContext from '../../store/AppContextProvider/useAppContext';
import { getAllContent } from '../../lib/data-api';
import DropdownList from '../../components/ui/DropdownList';
import { Router, useRouter } from 'next/router';
import Modal from 'react-modal';
import Card from "../../components/ui/Card";
import Image from 'next/image';

const BASE_IMG_URL = config.BASE_IMAGE_URL;
Modal.setAppElement("#__next");


export default function hof(props) {
  const router = useRouter();
  const [divisionalStarAwardees, setDivisionalStarAwardees] = React.useState();
  const [selectedAwardee, setSelectedAwardee] = React.useState();

  const appContext = useAppContext();
  const starAwardees = props.starAwardees
  const divisions = props.divisions

  React.useEffect(() => {
    appContext.setDivisions(divisions);
    if (!appContext.selectedDivision) {
      appContext.setSelectedDivision(divisions[0].divisionName);
    }
  }, [appContext]);

  React.useEffect(() => {
    setDivisionalStarAwardees(
      starAwardees.filter((starAwardee) => starAwardee.divisions.divisionName === appContext.selectedDivision),
    );
  }, [appContext, starAwardees]);

  React.useEffect(() => {
    if (router.query.id) {
      setSelectedAwardee(
        divisionalStarAwardees?.find(singleAwardee => singleAwardee.id.toString() === router.query.id)
      )
    }
  }, [router.query.id])

  const [value, setValue] = React.useState(true);

  const currentYear = new Date().getFullYear();
  let startingYear = 2017;
  let years = [];
  while (startingYear <= currentYear) {
    years.push({ text: startingYear, value: startingYear });
    startingYear++;
  }
  const [selectedYear, setSelectedYear] = React.useState(currentYear);

  const currQtr = Math.ceil((new Date().getMonth() + 1) / 3);
  let quarters = [];
  let strartingQtr = 1;
  while (strartingQtr <= 4) {
    quarters.push({ text: `Q${strartingQtr}`, value: `Q${strartingQtr}` });
    strartingQtr++;
  }

  const [selectedQtr, setSelectedQtr] = React.useState(`Q${currQtr}`)

  return (
    <>
      <Head>
        <title>Hall of Fame</title>
      </Head>
      <div className="flex justify-center w-full relative">
        <div className="grid grid-cols-1 gap-6">
          {showIf(value)(
            <div>
              <Carousel></Carousel>
            </div>
          )}
          <span className="flex flex-col justify-center items-center my-0">
            <button
              className="bg-blue-500 w-xs hover:bg-blue-700 text-white items-center font-bold py-2 px-4"
              name="set buttun name"
              onClick={() => setValue(!value)}
            >
              <FaPowerOff />
            </button>
          </span>
          <div className="mx-auto ">
            <div className="bg-gray-200 grid grid-cols-2 gap-2 p-4">
              <div className="w-full grid grid-cols-3 gap-2 p-4">
                <DropdownList items={years} selectedvalue={selectedYear} text={selectedYear} onChange={setSelectedYear} />
                <DropdownList items={quarters} selectedvalue={selectedQtr} text={selectedQtr} onChange={setSelectedQtr} />
                <Button
                  href="#"
                  className="bg-blue-700 w-4/12 min-w-min hover:bg-blue-700 text-white text-center font-bold px-4 py-2"
                >
                  Filter
                </Button>
              </div>
              <SearchBar className="place-self-end"></SearchBar>
            </div>
          </div>
          <div className="grid md:grid-cols-6 gap-4 mx-auto">
            {divisionalStarAwardees?.map((starAwardee, index) => (
              <>
                <ProfileCard
                  key={index}
                  title={starAwardee?.Awardee_name}
                  image={`${BASE_IMG_URL}${starAwardee?.profile_pic.url}`}
                  likes={starAwardee?.likes}
                  citation={starAwardee?.Citation}
                  division={starAwardee?.divisions.divisionName}
                  link={`/hall-of-fame/?id=${starAwardee?.id.toString()}`}
                  as={`/hall-of-fame/${starAwardee?.id.toString()}`}
                // onClick={() => {
                // router.push({
                //   pathname: '/hall-of-fame/[id]',
                //   query: { id: starAwardee?.id.toString() },
                //   as: `/hall-of-fame/${starAwardee?.id.toString()}`,
                //   options: {shallow: true}
                // })
                // }}
                />
              </>
            )
            )}

          </div>
        </div>
      </div>

      <Modal isOpen={!!router.query.id} className={'w-1/3 mx-auto mt-56'} onRequestClose={() => { router.back('/hall-of-fame') }}>
        {selectedAwardee && <Card
          // header={selectedAwardee?.Awardee_name}
          // subheader={selectedAwardee?.divisions.divisionName}
          // content={selectedAwardee?.Citation}
          className="border border-grey-300 bg-white p-4 flex relative">
          <div className="grid grid-flow-col auto-cols-auto gap-4 place-items-start">
            <Image
              src={`${BASE_IMG_URL}${selectedAwardee?.profile_pic.url}`}
              width={240} height={240} objectFit={'none'}
              alt={`Profile picture of ${selectedAwardee?.Awardee_name}`}

            />
            <div>
              <h2 className={'text-2xl font-black'}>{selectedAwardee?.Awardee_name}</h2>
              <h3 className={'text-xl'}>{selectedAwardee?.divisions.divisionName}</h3>
              <p className='mt-4'>{selectedAwardee?.Citation}</p>
            </div>
            <Button onClick={() => { router.back('/hall-of-fame') }} className="bg-blue-500 w-xs hover:bg-blue-700 text-white items-center font-bold py-1 px-2 justify-self-end">&#x2715;</Button>
          </div>
          
        </Card>}
      </Modal>
    </>
  );
}

export const getStaticProps = async () => {
  const starAwardees = await getAllContent('star-awardees');
  const divisions = await getAllContent('divisions');

  return {
    props: {
      starAwardees: starAwardees,
      divisions: divisions,
    },
    revalidate: 10
  };
};
