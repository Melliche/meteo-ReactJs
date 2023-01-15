import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Login from '../routes/Login';

export const AppContext = createContext(null)

export function AppProvider() {
  const [user, setUser] = useState({loggedIn: false})

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: !user.loggedIn ? (<App />) : (<Login />)
      
    },
  ])

  return (
    <AppContext.Provider value={{user, setUser}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}