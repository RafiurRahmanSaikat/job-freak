import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { About, Contact, Home } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404 ERROR</h1>,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
