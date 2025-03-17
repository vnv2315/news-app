import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import Newsboard from './components/newsboard.jsx';

const App = () => {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('en');
  
  return (
    <>
      <Navbar setCategory={setCategory} setLanguage={setLanguage} setCountry={setCountry} />
      <Newsboard category={category} language={language} country={country} />
    </>
  );
};

export default App;