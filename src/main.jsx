import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from './component/LandingPage.jsx';
import Quiz from './component/Quiz.jsx';
import About from './component/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "quiz",
        element: <Quiz />
      },
      {
        path: "home",
        element: <LandingPage />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  }])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
