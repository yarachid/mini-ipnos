import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sound} from '../../state/playing/sound.enum';
import {Observable, Subscription} from 'rxjs';
import {AppState} from '../../state';
import {select, Store} from '@ngrx/store';
import {selectIsPlaying, selectSounds} from '../../state/playing/playing.selectors';
import {AddSound, RemoveSound} from '../../state/playing/playing.actions';
import {first} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.scss']
})
export class SoundsComponent implements OnDestroy {

  soundsToPlay$ : Observable<Sound[]>;
  play: boolean;
  private _subscription = new Subscription();

  constructor(private store: Store<AppState>, public snackBar: MatSnackBar) {
    this.soundsToPlay$ = this.store.pipe(select(selectSounds));
    this._subscription.add(
      this.store.pipe(select(selectIsPlaying)).subscribe( p => this.play = p)
    );
  }

  ngOnInit() {
  }

  addSound(sound: Sound){
    this.soundsToPlay$.pipe(first())
      .subscribe(sounds => {
        if(sounds.length<3){
          this.store.dispatch(new AddSound(sound));
        } else {
            this.snackBar.open( "You can select only 3 sounds.", 'x',  {
              duration: 6000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
        }
      })

  }

  removeSound(sound: Sound){
    this.store.dispatch(new RemoveSound(sound));
  }

   getSoundsNames(): Array<string>{
     return Object.keys(Sound);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
