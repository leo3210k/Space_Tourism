import './App.css';

import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  const currentPath = function(location) {
    if(location.pathname === '/') {
      return 'home-mobile'
    } else if(location.pathname === '/destination') {
      return 'destination-mobile'
    } else if(location.pathname === '/crew') {
      return 'crew-mobile'
    }
  }

  return (
    <div className={`app bg-${currentPath(location)}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
