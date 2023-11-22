import './App.css'

import { Outlet } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {

  return (
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
  )
}

export default App