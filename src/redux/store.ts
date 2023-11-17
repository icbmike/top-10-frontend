import { StateFromReducersMapObject, combineReducers, configureStore } from "@reduxjs/toolkit";
import { lobbyReducer } from "./reducer";
import { joinLobbyEffect, loadLobbyEffect } from "./effects";

const reducerMap = {
  lobby: lobbyReducer
}

export type TState = StateFromReducersMapObject<typeof reducerMap>;

export const store = configureStore({
  reducer: combineReducers(reducerMap),
  middleware: [
    joinLobbyEffect,
    loadLobbyEffect
  ]
})