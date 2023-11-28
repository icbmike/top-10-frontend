import { createMikeEffect } from '@icbmike/mike-effect';
import {
  createLobby,
  createLobbyDone,
  createLobbyFailed,
  joinLobby,
  joinLobbyDone,
  joinLobbyFailed,
  loadLobby,
  loadLobbyDone,
  loadLobbyFailed,
  restoreActiveLobby,
} from './actions';
import { Lobby, Player } from '@icbmike/game-lobby-backend';
import { get, post } from '../helpers/api.helpers';
import { navigate } from '../App';
import { lobbyCodeStorageKey, playerStorageKey } from '../constants';

export const joinLobbyEffect = createMikeEffect(
  joinLobby,
  async ({ payload }) => {
    const response = await post<{ lobby: Lobby; newPlayer: Player }>(
      `/api/lobbies/${payload.lobbyCode}/players`,
      {
        name: payload.name,
      },
    );

    if (response.ok) {
      localStorage.setItem(lobbyCodeStorageKey, payload.lobbyCode);
      localStorage.setItem(
        playerStorageKey,
        JSON.stringify(response.data.newPlayer),
      );

      return joinLobbyDone({
        lobby: response.data.lobby,
        player: response.data.newPlayer,
      });
    }

    return joinLobbyFailed(response.error);
  },
);

export const loadLobbyEffect = createMikeEffect(
  loadLobby,
  async ({ payload }) => {
    const response = await get<Lobby>(`/api/lobbies/${payload.lobbyCode}`);

    return response.ok
      ? loadLobbyDone({ lobby: response.data })
      : loadLobbyFailed(response.error);
  },
);

export const createLobbyEffect = createMikeEffect(
  createLobby,
  async ({ payload }) => {
    const response = await post<Lobby>('/api/lobbies', {
      lobbySize: payload.lobbySize,
    });

    return response.ok
      ? createLobbyDone({ lobby: response.data })
      : createLobbyFailed(response.error);
  },
);

export const createLobbyDoneEffect = createMikeEffect(
  createLobbyDone,
  async ({ payload }) => {
    return navigate(`/lobby/${payload.lobby.code}`);
  },
);

export const restoreLobbyEffect = createMikeEffect(
  restoreActiveLobby,
  async ({ payload }) => {
    const { lobbyCode } = payload;

    if (window.location.pathname !== `/lobby/${lobbyCode}`) {
      await navigate(`/lobby/${lobbyCode}`);
    }
  },
);
