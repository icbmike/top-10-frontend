import {
  StateFromReducersMapObject,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { lobbyReducer } from './reducer';
import * as effects from './effects';

const reducerMap = {
  lobby: lobbyReducer,
};

export type TState = StateFromReducersMapObject<typeof reducerMap>;

export const store = configureStore({
  reducer: combineReducers(reducerMap),
  middleware: [...Object.values(effects)],
});
