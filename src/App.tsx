import React from "react"
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { IndexRoute } from "./routes/IndexRoute";
import { LobbyRoute } from "./routes/LobbyRoute";

export const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <IndexRoute /> },
    { path: '/lobby', element: <LobbyRoute /> }
  ]);

  return <div>
    <h1>It works</h1>
    <RouterProvider router={router} />
  </div>
}