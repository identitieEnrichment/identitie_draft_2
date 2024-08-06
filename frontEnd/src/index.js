import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Sectors from './pages/Sectors';
import Products from './pages/Products';
import AboutUS from './pages/AboutUS';
import ContactUs from './pages/ContactUs';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sectors",
        element: <Sectors />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/aboutus",
        element: <AboutUS />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
      <RouterProvider router={router}/>
        
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
