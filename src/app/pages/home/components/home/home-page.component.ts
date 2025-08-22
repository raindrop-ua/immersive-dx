import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MastheadComponent } from '../masthead/masthead.component';

@Component({
  selector: 'app-home-page',
  imports: [MastheadComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
