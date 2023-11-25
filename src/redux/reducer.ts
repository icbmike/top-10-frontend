import { Lobby, Player } from "@icbmike/game-lobby-backend";
import { createReducer } from "@reduxjs/toolkit";
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
} from "./actions";

interface IState {
  lobby?: Lobby;
  player?: Player;
  isLoadingLobby: boolean;
  isCreatingLobby: boolean;
}

const initialState: IState = {
  isLoadingLobby: false,
  isCreatingLobby: false,
};

export const lobbyReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(joinLobby, (state) => ({
      ...state,
      isLoadingLobby: true,
    }))
    .addCase(joinLobbyDone, (state) => ({
      ...state,
      isLoadingLobby: false,
    }))
    .addCase(joinLobbyFailed, (state) => ({
      ...state,
      isLoadingLobby: false,
    }))
    .addCase(loadLobby, (state) => ({
      ...state,
      isLoadingLobby: true,
    }))
    .addCase(loadLobbyDone, (state) => ({
      ...state,
      isLoadingLobby: false,
    }))
    .addCase(loadLobbyFailed, (state) => ({
      ...state,
      isLoadingLobby: false,
    }))
    .addCase(createLobby, (state) => ({
      ...state,
      isCreatingLobby: true,
    }))
    .addCase(createLobbyDone, (state) => ({
      ...state,
      isCreatingLobby: false,
    }))
    .addCase(createLobbyFailed, (state) => ({
      ...state,
      isCreatingLobby: false,
    })),
);
