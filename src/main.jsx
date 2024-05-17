import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./views/Home/Home.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { Gallery } from "./views/Gallery/Gallery.jsx";
import { Inside } from "./views/Inside/Inside.jsx";
import { Outside } from "./views/Outside/Outside.jsx";
import { Contact } from "./views/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/galeria",
        element: <Gallery />,
      },
      {
        path: "/galeria/wewnatrz",
        element: <Inside />,
      },
      {
        path: "/galeria/zewnatrz",
        element: <Outside />,
      },
      { path: "/kontakt", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
