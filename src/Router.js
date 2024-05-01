import {
    createBrowserRouter,
  } from "react-router-dom";
import PostJob from "./Components/PostJob/PostJob";
import JobsList from "./Components/JobsList/JobsList";
import App from "./App";
import Notfound from "./Components/Error/Notfound";
import ReviewProposels from "./Components/ReviewProposels/ReviewProposels";
export const router = createBrowserRouter([
    
    {
      path: "/",
      element: <App/>,
      //Nested routes
      children:[ {
        path: "/",
        element:<PostJob />  ,
      },
      {
        path: "/postJob",
        element: <PostJob />,
      },
      {
        path: "/jobsList",
        element: <JobsList />,
      },
      {
        path: "/reviewProposels/:jobId",
        element: <ReviewProposels />,
      },
     ],
     
    },
    {
        //Wild route
        path: "*",
        element: <Notfound/>
      }
  ]);