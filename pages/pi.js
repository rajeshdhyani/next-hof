import Carousel from "../components/Carousel.jsx";
import Cards2 from "../components/Cards2.jsx";
import StrapiClient from "../lib/strapi-client";
import config from "./api/config";

const BASE_IMG_URL = config.BASE_IMAGE_URL;

export default function hof({ upcomingEvents, divisions, sliders }) {
  console.log("drop down in PI");

  return (
    <>
      <div className="flex justify-center w-full relative">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Carousel data={sliders}></Carousel>
          </div>
          <div className="grid grid-cols-2 gap-8 ml-48 mr-48 ">
            <div className="w-11/12 row-gap-12 ">
              <div className="font-semibold text-2xl text-gray-400 border-b-2 border-gray-100 w-full pb-2  ">
                {" "}
                project information
              </div>
              {upcomingEvents.map((upcomingEvent, index) => (
                <Cards2
                  key={index}
                  textContent={upcomingEvent.PPM_updates_textcontent}
                  thumbnailUrl={`${BASE_IMG_URL}${upcomingEvent.PPM_update_banner.url}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const client = new StrapiClient();
export const getStaticProps = async () => {
  console.log("entered index getStaticProps");
  const upcomingEvents = await client.fetchData("/ppm-updates");
  const divisions = await client.fetchData("/divisions");
  const mainSliders = await client.fetchData("/hall-of-fame-sliders");
  const sliders = await client.fetchData("/du-sliders");
  console.log(mainSliders);

  return {
    props: {
      upcomingEvents: upcomingEvents,
      divisions: divisions,
      mainSliders: mainSliders,
    },
  };
};
