import { createMikeEffect } from "@icbmike/mike-effect";
import { joinLobby, joinLobbyDone, joinLobbyFailed } from "./actions";
import { Lobby } from "@icbmike/game-lobby-backend";

export const joinLobbyEffect = createMikeEffect(joinLobby, async ({ payload }) => {
  const response = await fetch(`/api/lobbies/${payload.lobbyCode}`, {
    headers: {
      Accept: 'application/json'
    }
  });

  if (response.ok) {
    const lobby = await response.json() as Lobby;
    return joinLobbyDone({ lobby });
  }

  return joinLobbyFailed(new Error(response.statusText));
});