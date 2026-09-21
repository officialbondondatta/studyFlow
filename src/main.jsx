import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import HomePage from './pages/homepage/Homepage.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: "/signin",
    element: <div>Signin</div>
  },
  {
    path: "/register",
    element: <div>Register</div>
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
