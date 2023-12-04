import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserDetails from "./components/UserDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
