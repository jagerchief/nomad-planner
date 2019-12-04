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
import {ReactiveFormsModule} from '@angular/forms';
import {AeroDataBoxService} from './services/AeroDataBox.service';
import {HttpClientModule} from '@angular/common/http';
import {AddRouteComponent} from './containers/add-route/add-route.component';
import {reducer} from './reducers/route.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    PdfGenComponent,
    RoutesComponent,
    RouteDetailsComponent,
    AddFlightComponent,
    AddAccommodationComponent,
    AddRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      routes: reducer
    })
  ],
  providers: [
    AeroDataBoxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
