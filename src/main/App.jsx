import './App.css';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const mobileWidthTreshold = 1024;

function App() {
  const location = useLocation();
  const [currentLocationClass, setCurrentLocationClass] = useState('');

  useEffect(() => {
    const determineBackgroundClass = () => {
      const { pathname } = location;
      const isMobile = window.innerWidth < mobileWidthTreshold;

      if (pathname === '/') {
        return isMobile ? 'bg-home-mobile' : 'bg-home-desktop';
      } else if (pathname === '/destination') {
        return isMobile ? 'bg-destination-mobile' : 'bg-destination-desktop';
      } else if (pathname === '/crew' || pathname === '/crew/') {
        return isMobile ? 'bg-crew-mobile' : 'bg-crew-desktop';
      } else if (pathname === '/technology' || pathname === '/technology/') {
        return isMobile ? 'bg-technology-mobile' : 'bg-technology-desktop';
      }

      return '';
    };

    setCurrentLocationClass(determineBackgroundClass());
  }, [location]);

  return (
    <div className={`app min-h-screen ${currentLocationClass}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
