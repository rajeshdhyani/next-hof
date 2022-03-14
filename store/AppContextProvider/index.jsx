import React from 'react';

export const AppContext = React.createContext({});

const AppContextProvider = (props) => {
  const { children, context, ...rest } = props;
  const [divisions, setDivisions] = React.useState([]);
  const [selectedDivision, setSelectedDivision] = React.useState(undefined);

  const appContext = { divisions, setDivisions, selectedDivision, setSelectedDivision, ...context };

  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
