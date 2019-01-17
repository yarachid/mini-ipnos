import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sounds></app-sounds>
    <app-menu></app-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
