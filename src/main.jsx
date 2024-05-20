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
import { ChooseApartment } from "./views/ChooseApartment/ChooseApartment.jsx";
import { FloorPlan } from "./components/FloorPlan/FloorPlan.jsx";
import { FloorPlanFirst } from "./components/FloorPlan/FloorPlanFirst.jsx";
import { FloorPlanSecond } from "./components/FloorPlan/FloorPlanSecond.jsx";
import { FloorPlanThird } from "./components/FloorPlan/FloorPlanThird.jsx";
import { Apartment } from "./views/Apartment/Apartment.jsx";
import { apartmentLoader } from "./api/apartmentLoader.js";

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
      {
        path: "/wybierz-mieszkanie",
        element: <ChooseApartment />,
      },
      {
        path: "/wybierz-mieszkanie/pietro/0",
        element: <FloorPlan />,
      },
      {
        path: "/wybierz-mieszkanie/pietro/1",
        element: <FloorPlanFirst />,
      },
      {
        path: "/wybierz-mieszkanie/pietro/2",
        element: <FloorPlanSecond />,
      },
      {
        path: "/wybierz-mieszkanie/pietro/3",
        element: <FloorPlanThird />,
      },
      {
        path: "/wybierz-mieszkanie/mieszkanie/:apartmentId",
        element: <Apartment />,
        loader: apartmentLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
