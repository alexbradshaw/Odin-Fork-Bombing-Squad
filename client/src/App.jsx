import './App.css'

import { createContext, useState } from 'react';

import { Outlet } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';

export const UserData = createContext();

function App() {

  const [userData, setData] = useState({
    "_id":"",
    "username":"",
    "email":""
  });

  return (
      <div className='app'>
        <UserData.Provider value={{ userData, setData }}>
          <Navbar />
          <Outlet />
        </UserData.Provider>
      </div>
  )
}

export default App