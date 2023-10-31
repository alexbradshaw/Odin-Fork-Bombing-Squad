import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import TestPage from './Pages/TestPage/TestPage';
import TestPage2 from './Pages/TestPage2/TestPage2';
import Navbar from './Components/Navbar/Navbar';
import Listings from './Pages/Listings/Listings';
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/test' element={<TestPage/>}/>
            <Route path='/test2' element={<TestPage2/>}/>
            <Route path='/listings' element={<Listings/>}/>
          </Routes>
      </div>
    </Router>
  )
}

export default App