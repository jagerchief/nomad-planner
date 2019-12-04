import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Route} from '../../models/route';
import {AppState} from '../../actions/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {


  // Section 1
  routes: Observable<Route[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.routes = store.select('routes');
  }



  ngOnInit() {
  }

}
