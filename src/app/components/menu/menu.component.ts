import { Component, OnInit } from '@angular/core';
import {AppState} from '../../state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectIsPlaying} from '../../state/playing/playing.selectors';
import {Clear, Pause, Play} from '../../state/playing/playing.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  playing$: Observable<boolean>;

  constructor(public store: Store<AppState>) {
    this.playing$ = this.store.pipe(select(selectIsPlaying));
  }

  ngOnInit() {
  }

  public play(){
    this.store.dispatch(new Play());
  }

  public pause(){
    this.store.dispatch(new Pause());
  }

  public clear(){
    this.store.dispatch(new Clear());
  }

}
