import { Action } from '@ngrx/store';
import {Sound} from './sound.enum';

export enum PlayingActionTypes {
  Play = '[Playing] Play',
  Pause = '[Playing] Pause',
  Clear = '[Playing] Clear',
  AddSound = '[Playing] add sound',
  RemoveSound = '[Playing] remove sound',
}

export class Play implements Action {
  readonly type = PlayingActionTypes.Play;
}

export class Pause implements Action {
  readonly type = PlayingActionTypes.Pause;
}

export class Clear implements Action {
  readonly type = PlayingActionTypes.Clear;
}

export class AddSound implements Action{
  readonly type = PlayingActionTypes.AddSound;
  public constructor(public payload: Sound){}
}

export class RemoveSound implements Action{
  readonly type = PlayingActionTypes.RemoveSound;
  public constructor(public payload: Sound){}
}

export type PlayingActions = Play | Pause | Clear | AddSound | RemoveSound;
