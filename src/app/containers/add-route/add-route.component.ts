import { Component, OnInit } from '@angular/core';
import {AppState} from '../../actions/app.state';
import { Store } from '@ngrx/store';
import * as RouteActions from './../../actions/routes.actions';

@Component({
  selector: 'add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.scss']
})
export class AddRouteComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addTutorial(name, url) {
    this.store.dispatch(new RouteActions.AddRoute({
      name: name,
      imageUrl: url
    }) );
  }

  ngOnInit() {
  }

}
