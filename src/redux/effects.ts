import { createMikeEffect } from "@icbmike/mike-effect";
import {
  joinLobby,
  joinLobbyDone,
  joinLobbyFailed,
  loadLobby,
  loadLobbyDone,
  loadLobbyFailed,
} from "./actions";
import { Lobby } from "@icbmike/game-lobby-backend";

export const joinLobbyEffect = createMikeEffect(
  joinLobby,
  async ({ payload }) => {
    const response = await fetch(`/api/lobbies/${payload.lobbyCode}`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const lobby = (await response.json()) as Lobby;
      return joinLobbyDone({ lobby });
    }

    return joinLobbyFailed(new Error(response.statusText));
  },
);

export const loadLobbyEffect = createMikeEffect(
  loadLobby,
  async ({ payload }) => {
    const response = await fetch(`/api/lobbies/${payload.lobbyCode}`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const lobby = (await response.json()) as Lobby;
      return loadLobbyDone({ lobby });
    }

    return loadLobbyFailed(new Error(response.statusText));
  },
);
