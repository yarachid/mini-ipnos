import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {metaReducers, reducers} from './state';
import {EffectsModule} from '@ngrx/effects';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatSnackBarModule} from '@angular/material';
import { MenuComponent } from './components/menu/menu.component';
import { SoundsComponent } from './components/sounds/sounds.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BackgroundAudioComponent} from './components/background-audio/background-audio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SoundsComponent,
    BackgroundAudioComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule,
    StoreModule.forRoot(reducers, { metaReducers : metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
