import React, {useState} from 'react';
import Layout from '../components/layout/Layout';
import '../styles/global.css'
import { MyAppContextProvider } from '../store/MyAppContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
   const [selectedDivision, setSelectedDivision] = useState(pageProps?.divisions[0].divisionName);
  // const handleSelectedDivisionChange = React.useCallback((division) => {
  //   setSelectedDivision(division)
  // }, [])
  return (
    <MyAppContextProvider>
      <Layout>
        <Head>
          <title>Divisional Updates</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} divisions={pageProps.divisions} selectedDivision={selectedDivision}/>
      </Layout>
    </MyAppContextProvider>
  )
}

export default MyApp