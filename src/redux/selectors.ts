import { TState } from './store';

export const selectIsLobbyLoading = (state: TState) =>
  state.lobby.isLoadingLobby;

export const selectIsJoiningLobby = (state: TState) =>
  state.lobby.isJoiningLobby;

export const selectLobby = (state: TState) => state.lobby.lobby;
export const selectPlayer = (state: TState) => state.lobby.player;
