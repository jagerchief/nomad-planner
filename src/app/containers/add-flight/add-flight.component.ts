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
  constructor(private fb: FormBuilder, private dataBoxService: AeroDataBoxService) { }

  ngOnInit() {
    this.addFlightForm = this.fb.group({
      flightNum: [''],
      dateFrom: ['']
    });
  }

  getFlightInfo() {
    this.dataBoxService.getFlightInfo('Fr', 'asdasd')
        .subscribe(response => {
          console.log(response);
        });
    console.log(this.addFlightForm.controls.flightNum.value);
    console.log(this.addFlightForm.controls.dateFrom.value);
  }

}
