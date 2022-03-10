import { createContext, useState } from "react";
import StrapiClient from '../lib/strapi-client';


//Add all app level (global) states in this file. The current implementation takes care of the division selection
const MyAppContext = createContext({
    division: null, //TBD: Populate this field with the users parent division as coming from Hexaview
    setCurrentDivision: function(divisionSelectionData){},
});

export function MyAppContextProvider(props) {
    // const [selectedDivision, setSelectedDivision] = useState(pageProps?.divisions[0].divisionName);
    // const handleSelectedDivisionChange = useCallback((division) => {
    //     setSelectedDivision(division)
    // }, [])
    const [selectedDivision, setSelectedDivision] = useState();

    function setSelectedDivisionHandler(divisionSelectionData){
        setSelectedDivision(divisionSelectionData);
    }

    const context = {division: selectedDivision, setCurrentDivision: setSelectedDivisionHandler}

    return (
        <MyAppContext.Provider value={context}>
            {props.children}
        </MyAppContext.Provider>
    )
}

export default MyAppContext;

// const client = new StrapiClient();
// export const getStaticProps = async () => {
//   console.log('entered _app getStaticProps')
//   const divisions = await client.fetchData('/divisions');
//   return {
//     props: {
//       divisions: divisions,
//     }
//   }
// }