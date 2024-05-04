import {
    createBrowserRouter,
  } from "react-router-dom";
import PostJob from "./Components/PostJob/PostJob";
import JobsList from "./Components/JobsList/JobsList";
import App from "./App";
import Notfound from "./Components/Error/Notfound";
import ReviewProposels from "./Components/ReviewProposels/ReviewProposels";
import ViewProposel from "./Components/ViewProposel/ViewProposel";
import  Signup from "./Components/SignUp/Signup";
import Login  from "./Components/Login/Login";
export const router = createBrowserRouter([
    
    {
      path: "/",
      element: <App/>,
      //Nested routes
      children:[
        {
          path: "/login",
          element: <Login/>
        },
      {
        path: "/register",
        element:<Signup/>  ,
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
      {
        path: "/viewProposel/:proposalId",
        element: <ViewProposel/>,
      },
     ],

    },
    {
        //Wild route
        path: "*",
        element: <Notfound/>
      }
  ]);