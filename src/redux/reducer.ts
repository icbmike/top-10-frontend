import { Lobby, Player } from '@icbmike/game-lobby-backend';
import { createReducer } from '@reduxjs/toolkit';
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

interface IState {
  lobby?: Lobby;
  player?: Player;
  isLoadingLobby: boolean;
  isCreatingLobby: boolean;
  isJoiningLobby: boolean;
}

const initialState: IState = {
  isLoadingLobby: false,
  isJoiningLobby: false,
  isCreatingLobby: false,
};

export const lobbyReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(joinLobby, (state) => ({
      ...state,
      isJoiningLobby: true,
    }))
    .addCase(joinLobbyDone, (state, { payload }) => ({
      ...state,
      lobby: payload.lobby,
      player: payload.player,
      isJoiningLobby: false,
    }))
    .addCase(joinLobbyFailed, (state) => ({
      ...state,
      isJoiningLobby: false,
    }))
    .addCase(loadLobby, (state) => ({
      ...state,
      isLoadingLobby: true,
    }))
    .addCase(loadLobbyDone, (state, { payload }) => ({
      ...state,
      isLoadingLobby: false,
      lobby: payload.lobby,
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
