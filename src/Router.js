import {
    createBrowserRouter,
  } from "react-router-dom";
import PostJob from "./Components/PostJob/PostJob";
import ReviewProposels from "./Components/ReviewProposels/ReviewProposels";
import Account from "./Components/Account/Account";
import App from "./App";
import Notfound from "./Components/Error/Notfound";
export const router = createBrowserRouter([
    
    {
      path: "/",
      element: <App/>,
      //Nested routes
      children:[ {
        path: "/account",
        element:  <Account/>,
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