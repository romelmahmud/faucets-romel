import { Home, FAQ, LogIn, SignUp, Error } from "../pages";

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
]);
