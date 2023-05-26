import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Homepage from './components/Homepage/Homepage';
import Job from './components/Job/Job';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
        loader: () => fetch('/categories.json')
      },
      {
        path: '/job/:id',
        element: <Job />,
        loader:()=> fetch('/featuredJobs.json')
      },
      {
        path: 'applied_jobs',
        element: <AppliedJobs />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
