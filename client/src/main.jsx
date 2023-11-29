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
  SellItem, 
  SignIn, 
  SignUp, 
  SingleItem,
  CheckoutPage,
  ErrorPage,
  PurchasePage
} 
from './Pages/index.js';

export const RoutesContext = createContext();

const routes = [
  { index: true, element: <Landing />, name: "Home" },
  { path: 'listings', element: <Listings />, name: "Profile" },
  { path: 'item/:itemId', element: <SingleItem /> },
  { path: 'login', element: <SignIn /> },
  { path: 'signUp', element: <SignUp />, name: "Sign Up" },
  { path: 'sellItem', element: <SellItem />, name: "Sell" },
  { path: 'checkout', element: <CheckoutPage /> },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: routes
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesContext.Provider value={{ routes }}>
      <RouterProvider router={router} />
    </RoutesContext.Provider>
  </React.StrictMode>,
)