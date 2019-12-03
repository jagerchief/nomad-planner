import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesComponent} from './containers/routes/routes.component';
import {RouteDetailsComponent} from './containers/route-details/route-details.component';
import {AddFlightComponent} from './containers/add-flight/add-flight.component';
import {AddAccommodationComponent} from './containers/add-accommodation/add-accommodation.component';

const routes: Routes = [
  {
    path: '', component: RoutesComponent
  },
  {
    path: 'route/:routeId', component: RouteDetailsComponent
  },
  {
    path: 'route/:routeId/add/flight', component: AddFlightComponent
  },
  {
    path: 'route/:routeId/add/accommodation', component: AddAccommodationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
