import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TestPage from './Pages/TestPage/TestPage';
import Listings from './Pages/Listings/Listings';
import Landing from './Pages/Landing/Landing';
import SignIn from './Pages/SignIn/SignIn.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Landing />
      }, 
      {
        path: 'listings',
        element: <Listings />
      },      
      {
        path: 'test',
        element: <TestPage />
      },
      {
        path: 'item/:itemId',
        element: <TestPage />,
      },
      {
        path: 'login',
        element: <SignIn />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)