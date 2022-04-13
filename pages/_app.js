import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import '../styles/global.css';
import { MyAppContextProvider } from '../store/MyAppContext';
import Head from 'next/head';
import AppContextProvider from '../store/AppContextProvider';
import useAppContext from '../store/AppContextProvider/useAppContext';

function MyApp({ Component, pageProps }) {
  // const [selectedDivision, setSelectedDivision] = useState(pageProps?.divisions[0].divisionName);
  const [selectedDivision, setSelectedDivision] = useState();
  const [divisions, setDivisions] = React.useState(pageProps?.divisions);

  const appContext = { divisions, setDivisions, selectedDivision, setSelectedDivision };

  return (
    <AppContextProvider value={appContext} className="transition-all">
      <Layout>
        <Head>
          <title>Divisional Updates</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
