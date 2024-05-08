import './App.css';

import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  let location = useLocation();
  const [currentLocation, setCurrentLocation] = useState('home-mobile');

  useEffect(() => {
    if(location.pathname === '/') {
      setCurrentLocation('home-mobile')
    } else if(location.pathname === '/destination') {
      setCurrentLocation('destination-mobile')
    } else if(location.pathname === '/crew') {
      setCurrentLocation('crew-mobile')
    } else if(location.pathname === '/technology') {
      setCurrentLocation('technology-mobile')
    }
  }, [location.pathname])

  return (
    <div className={`app min-h-screen bg-home-desktop`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
