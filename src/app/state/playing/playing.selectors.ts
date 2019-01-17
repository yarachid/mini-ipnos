import {AppState} from '../index';
import {PlayingState} from './playing.reducer';
import {createSelector} from '@ngrx/store';

export const selectPlayingState = ( state:AppState): PlayingState => state.playing;

export const selectIsPlaying = createSelector(
  selectPlayingState,
  sate => sate.play
);

export const selectSounds = createSelector(
  selectPlayingState,
  state => state.sounds
);
