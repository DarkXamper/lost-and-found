import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import Home from "../components/Home";
import SignIn from "../pages/SignIn";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";
import CreateListing from "../pages/CreateListing";
import Explore from "../pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "itemList",
        // element: <Outlet />,
        children: [
          {
            path: "createlisting",
            element: <CreateListing />,
          },
          {
            path: "explore",
            element: <Explore />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
