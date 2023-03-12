import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { About, Contact, Error404 } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404/>,
    children: [
      { path: "/", element: <About /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
