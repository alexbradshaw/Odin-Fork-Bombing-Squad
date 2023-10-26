import { useState } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import TestPage from './Pages/TestPage/TestPage';
import TestPage2 from './Pages/TestPage2/TestPage2';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='app'>
        <Navbar />
          <Routes>
            <Route path='/' element={<TestPage/>}/>
            <Route path='/test2' element={<TestPage2/>}/>
          </Routes>
      </div>
    </Router>
  )
}

export default App