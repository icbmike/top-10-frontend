import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { IndexRoute } from "./routes/IndexRoute";
import { LobbyRoute } from "./routes/LobbyRoute";
import { NotFoundRoute } from "./routes/NotFoundRoute";
import { NewLobbyRoute } from "./routes/NewLobbyRoute";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.scss";

const router = createBrowserRouter([
  { path: "/", element: <IndexRoute /> },
  { path: "/newLobby", element: <NewLobbyRoute /> },
  { path: "/lobby/:lobbyCode", element: <LobbyRoute /> },
  { path: "*", element: <NotFoundRoute /> },
]);

export const navigate = router.navigate;

export const App = () => (
  <Provider store={store}>
    <h1>Top 10</h1>

    <RouterProvider router={router} />
  </Provider>
);
