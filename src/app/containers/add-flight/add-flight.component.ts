import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AeroDataBoxService} from '../../services/AeroDataBox.service';

@Component({
  selector: 'add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {

  public addFlightForm: FormGroup;
  public possibleFlights = [
    {
      "departure":{
        "airport":{
          "icao":"LEBL",
          "iata":"BCN",
          "name":"Barcelona",
          "shortName":"Barcelona",
          "municipalityName":"Barcelona",
          "location":{
            "lat":41.2971,
            "lon":2.078459
          }
        },
        "scheduledTimeLocal":"2019-12-04 16:55+01:00",
        "actualTimeLocal":"2019-12-04 16:55+01:00",
        "scheduledTimeUtc":"2019-12-04 15:55Z",
        "actualTimeUtc":"2019-12-04 15:55Z",
        "quality":[
          "Basic",
          "Live"
        ]
      },
      "arrival":{
        "airport":{
          "icao":"LHBP",
          "iata":"BUD",
          "name":"Budapest, Budapest Ferenc Liszt",
          "shortName":"Ferenc Liszt",
          "municipalityName":"Budapest",
          "location":{
            "lat":47.4369,
            "lon":19.2555981
          }
        },
        "scheduledTimeLocal":"2019-12-04 19:35+01:00",

      },
      "airline":{
        "name":"Ryanair"
      }
    }
  ];
  constructor(private fb: FormBuilder, private dataBoxService: AeroDataBoxService) { }

  ngOnInit() {
    this.addFlightForm = this.fb.group({
      flightNum: ['FR8394'],
      dateFrom: ['2019-12-04']
    });
  }

  getFlightInfo() {
    const flightNum = this.addFlightForm.controls.flightNum.value;
    const date = this.addFlightForm.controls.dateFrom.value;
    this.dataBoxService.getFlightInfo(flightNum, date)
        .subscribe(response => {
          console.log(response);
          this.possibleFlights = response;
        });
  }

}
