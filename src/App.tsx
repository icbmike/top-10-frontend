import React from "react"
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { IndexRoute } from "./routes/IndexRoute";
import { LobbyRoute } from "./routes/LobbyRoute";
import { NotFoundRoute } from "./routes/NotFoundRoute";

import "./App.scss";

export const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <IndexRoute /> },
    { path: '/lobby', element: <LobbyRoute /> },
    { path: '*', element: <NotFoundRoute /> }
  ]);

  return <RouterProvider router={router} />
}