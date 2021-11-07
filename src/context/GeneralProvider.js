// vitals
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// context
import MyContext from './MyContext';

function GeneralProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      const request = await axios.get(`https://api.github.com/users/${searchText}`);
      setUserData(request.data);
    };
    fetchAPI();
  }, [searchText]);

  const globalState = {
    darkTheme,
    setDarkTheme,
    searchText,
    setSearchText,
    userData,
  };

  return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
}

export default GeneralProvider;
