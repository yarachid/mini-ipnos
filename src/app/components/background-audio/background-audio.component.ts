import {AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-background-audio',
  templateUrl: './background-audio.component.html',
  styleUrls: ['./background-audio.component.scss']
})
export class BackgroundAudioComponent implements AfterViewChecked {

  @ViewChild('audio') audio: ElementRef;

  @Input()
  src: string;

  @Input()
  paused: boolean;

  constructor() {

  }

  ngAfterViewChecked(): void {
    if(this.paused){
      this.audio.nativeElement.pause();
    } else {
      this.audio.nativeElement.play();
    }
  }

}
