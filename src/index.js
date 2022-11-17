import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/penelopeundercover.github.io/home" element={<Home />} />
      <Route
        path="/penelopeundercover.github.io/projects"
        element={<Projects />}
      />
      <Route path="/penelopeundercover.github.io/resume" element={<Resume />} />
      <Route
        path="/penelopeundercover.github.io/contact"
        element={<Contact />}
      />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
