import {PlayingActions, PlayingActionTypes} from './playing.actions';
import {Sound} from './sound.enum';

export interface PlayingState {
  play: boolean,
  sounds: Sound[]
}

export const initialState: PlayingState = {
  play: true,
  sounds: []
};

export function playingReducer(state = initialState, action: PlayingActions): PlayingState {

  switch (action.type) {
    case PlayingActionTypes.Clear:
      return initialState;
    case PlayingActionTypes.Play:
      return {
        ...state,
        play: true
      };
    case PlayingActionTypes.Pause:
      return {
        ...state,
        play: false
      };
    case PlayingActionTypes.AddSound:
      return {
        ...state,
        sounds: [action.payload,... state.sounds]
      };
    case PlayingActionTypes.RemoveSound:
      return {
        ...state,
        sounds: state.sounds.filter(s => s !== action.payload)
      };
    default:
      return state;
  }

}
