import { Lobby, Player } from "@icbmike/game-lobby-backend";
import { createReducer } from "@reduxjs/toolkit";
import { joinLobby, joinLobbyDone, joinLobbyFailed } from "./actions";

interface IState {
  lobby?: Lobby
  player?: Player
  isLoadingLobby: boolean;
}

const initialState: IState = {
  isLoadingLobby: false
};

export const lobbyReducer = createReducer(initialState, builder => builder
  .addCase(joinLobby, state => ({
    ...state,
    isLoadingLobby: true
  })
  ).addCase(joinLobbyDone, state => ({
    isLoadingLobby: false
  }))
  .addCase(joinLobbyFailed, state => ({
    isLoadingLobby: false
  }))
);