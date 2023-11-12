import { TState } from "./store";

export const isLobbyLoading = (state: TState) => state.lobby.isLoadingLobby;
export const lobby = (state: TState) => state.lobby.lobby;
export const player = (state: TState) => state.lobby.player;