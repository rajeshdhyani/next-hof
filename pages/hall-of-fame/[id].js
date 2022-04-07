//Details page
import { getAllContent, getAwardeeById } from "../../lib/data-api";
import useAppContext from '../../store/AppContextProvider/useAppContext';
import React from 'react';
import Image from "next/image";
import config from '../../api/config';
import Card from "../../components/ui/Card";
// import StrapiClient from "../../lib/strapi-client";

const BASE_IMG_URL = config.BASE_IMAGE_URL;
function AwardeeDetailsPage(props) {
    const appContext = useAppContext();
    // console.log(props)

    React.useEffect(() => {
        appContext.setDivisions(props.divisions);
        if (!appContext.selectedDivision) {
            appContext.setSelectedDivision(props.divisions[0].divisionName);
        }
    }, [appContext]);

    return (
        <div className="w-1/2 mx-auto ">
            <Card
                // header={props.selectedAwardee.Awardee_name}
                // subheader={props.selectedAwardee?.divisions.divisionName}
                // content={props.selectedAwardee.Citation}
                className="border border-grey-300 bg-white p-4 relative">
                <div className="grid grid-flow-col auto-cols-auto place-items-start gap-4">
                    <Image
                        src={`${BASE_IMG_URL}${props.selectedAwardee?.profile_pic.url}`}
                        width={240} height={240} objectFit={'none'}
                        alt={`Profile picture of ${props.selectedAwardee.Awardee_name}`}
                        className={'place-self-start'}
                    />
                    <div>
                        <h2 className={'text-2xl font-black'}>{props.selectedAwardee?.Awardee_name}</h2>
                        <h3 className={'text-xl'}>{props.selectedAwardee?.divisions.divisionName}</h3>
                        <p className='mt-4'>{props.selectedAwardee?.Citation}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export async function getStaticProps(context) {
    const awardeeId = context.params.id;
    const divisions = await getAllContent('divisions');
    const singleAwardee = await getAwardeeById(awardeeId);
    return {
        props: {
            divisions,
            selectedAwardee: singleAwardee
        },
    }
}


export async function getStaticPaths() {
    const posts = await getAllContent('star-awardees');
    const paths = posts.map(post => ({ params: { id: post.id.toString() } }))

    return {
        paths: paths,
        fallback: false
    }
}

export default AwardeeDetailsPage