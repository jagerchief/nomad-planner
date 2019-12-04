import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './actions/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-pdf';

  constructor(private store: Store<AppState>) {
    store.subscribe( function (storeContent) {
      console.log(storeContent);
    });
  }
}
