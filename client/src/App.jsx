import { useState } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import TestPage from './Pages/TestPage/TestPage';
import TestPage2 from './Pages/TestPage2/TestPage2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
          <div className='display'>
            <Routes>
              <Route path='/' element={<TestPage/>}/>
              <Route path='/test2' element={<TestPage2/>}/>
            </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App
