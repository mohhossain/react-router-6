import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserDetails from "./components/UserDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Somthing went wrong!</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
