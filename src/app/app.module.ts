import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfGenComponent } from './pdf-gen/pdf-gen.component';
import { RoutesComponent } from './containers/routes/routes.component';
import { RouteDetailsComponent } from './containers/route-details/route-details.component';
import { AddFlightComponent } from './containers/add-flight/add-flight.component';
import { AddAccommodationComponent } from './containers/add-accommodation/add-accommodation.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter.reducer';


@NgModule({
  declarations: [
    AppComponent,
    PdfGenComponent,
    RoutesComponent,
    RouteDetailsComponent,
    AddFlightComponent,
    AddAccommodationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
