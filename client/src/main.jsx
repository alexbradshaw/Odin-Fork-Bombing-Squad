import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { 
  Landing, 
  Listings, 
  SignIn, 
  SignUp, 
  SellItem, 
  TestPage 
} 
from './Pages/index.js';

export const RoutesContext = createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Wrong page!</h1>,
    children: routes
  }
])

const routes = [
  { index: true, element: <Landing /> },
  { path: 'listings', element: <Listings /> },
  { path: 'item/:itemId', element: <TestPage /> },
  { path: 'login', element: <SignIn /> },
  { path: 'signUp', element: <SignUp /> },
  { path: 'sellItem', element: <SellItem /> },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesContext.Provider value={{ routes }}>
      <RouterProvider router={router} />
    </RoutesContext.Provider>
  </React.StrictMode>,
)