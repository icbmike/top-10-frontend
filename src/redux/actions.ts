import { Lobby } from "@icbmike/game-lobby-backend";
import { PayloadActionCreator, createAction } from "@reduxjs/toolkit"

export const createLoadingActions = <TLoadPayload = void, TDonePayload = void, TFailedPayload = Error>(type: string):
  [
    PayloadActionCreator<TLoadPayload>,
    PayloadActionCreator<TDonePayload>,
    PayloadActionCreator<TFailedPayload>
  ] => {

  return [
    createAction<TLoadPayload>(type),
    createAction<TDonePayload>(`${type}/DONE`),
    createAction<TFailedPayload>(`${type}/FAILED`),
  ]
}

export const [joinLobby, joinLobbyDone, joinLobbyFailed] = createLoadingActions<{ lobbyCode: string }, { lobby: Lobby }>('joinLobby');