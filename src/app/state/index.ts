import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {playingReducer, PlayingState} from './playing/playing.reducer';

export interface AppState {
  playing: PlayingState
}

export const reducers: ActionReducerMap<AppState> = {
  playing: playingReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];
