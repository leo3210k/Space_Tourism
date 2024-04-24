import './App.css';

import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  let location = useLocation();
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    console.log(location.pathname)
    if(location.pathname === '/') {
      setCurrentLocation('home-mobile')
    } else if(location.pathname === '/destination') {
      setCurrentLocation('destination-mobile')
    } else if(location.pathname === '/crew') {
      setCurrentLocation('crew-mobile')
    }
  }, [location.pathname])

  return (
    <div className={`app bg-home-mobile`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
