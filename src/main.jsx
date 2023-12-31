import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Story1 from "./pages/Story1.jsx";
import Story2 from "./pages/Story2.jsx";
import Story3 from "./pages/Story3.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// testtttt being the github reporsitory name
const router = createBrowserRouter([
  {
    path: "/testtttt/",
    element: <App />,
  },
  {
    path: "/testtttt/1",
    element: <Story1 />,
  },
  {
    path: "/testtttt/2",
    element: <Story2 />,
  },
  {
    path: "/testtttt/3",
    element: <Story3 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
