import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './actions/app.state';
import {LocalStorageService} from './services/LocalStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-pdf';

  constructor(private store: Store<AppState>, private localStorageService: LocalStorageService) {
    store.subscribe( function (storeContent) {
      localStorageService.saveState(storeContent.routes);
    });
  }
}
