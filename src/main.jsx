import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import HomePage from './pages/homepage/Homepage.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import SignIn from './pages/sign-in/SignIn.jsx';
import SignUp from './pages/sign-up/SignUp.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/register",
        element: <div>Register</div>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
