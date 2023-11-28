import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { IndexRoute } from './routes/IndexRoute';
import { LobbyRoute } from './routes/LobbyRoute';
import { NotFoundRoute } from './routes/NotFoundRoute';
import { NewLobbyRoute } from './routes/NewLobbyRoute';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './App.scss';
import { lobbyCodeStorageKey, playerStorageKey } from './constants';
import { restoreActiveLobby } from './redux/actions';
import { Player } from '@icbmike/game-lobby-backend';

const router = createBrowserRouter([
  { path: '/', element: <IndexRoute /> },
  { path: '/newLobby', element: <NewLobbyRoute /> },
  { path: '/lobby/:lobbyCode', element: <LobbyRoute /> },
  { path: '*', element: <NotFoundRoute /> },
]);

export const navigate = router.navigate;

export const App = () => {
  useEffect(() => {
    const lobbyCode = localStorage.getItem(lobbyCodeStorageKey);
    const playerJson = localStorage.getItem(playerStorageKey);

    if (lobbyCode && playerJson) {
      store.dispatch(
        restoreActiveLobby({
          lobbyCode,
          player: JSON.parse(playerJson) as Player,
        }),
      );
    }
  }, []);

  return (
    <Provider store={store}>
      <h1>Top 10</h1>

      <RouterProvider router={router} />
    </Provider>
  );
};
