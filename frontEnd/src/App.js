import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  
  
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default App;
