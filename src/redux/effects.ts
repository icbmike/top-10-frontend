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
} from './actions';
import { Lobby } from '@icbmike/game-lobby-backend';
import { get, post } from '../helpers/api.helpers';

export const joinLobbyEffect = createMikeEffect(
  joinLobby,
  async ({ payload }) => {
    const response = await get<Lobby>(`/api/lobbies/${payload.lobbyCode}`);

    return response.ok
      ? joinLobbyDone({ lobby: response.data })
      : joinLobbyFailed(response.error);
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
