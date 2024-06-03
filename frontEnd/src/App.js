import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
 
 

const location = useLocation();
useEffect(() => {
  window.scrollTo(0,0);
}, [location]);
  return (
    <div>
       
      <Outlet/>
    </div>
  );
}

export default App;
