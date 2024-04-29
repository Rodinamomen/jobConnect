import {
    createBrowserRouter,
  } from "react-router-dom";
import PostJob from "./Components/PostJob/PostJob";
import ReviewProposels from "./Components/ReviewProposels/ReviewProposels";

import App from "./App";
import Notfound from "./Components/Error/Notfound";
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
        path: "/reviewProposels",
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