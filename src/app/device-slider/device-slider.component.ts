import { Component, Inject } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { AuthenticationService } from '../authentication.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-device-slider',
  templateUrl: './device-slider.component.html',
  styleUrls: ['./device-slider.component.css']
})
export class DeviceSliderComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private auth:AuthenticationService,private dataSharingService: DataSharingService){
    this.displayname= data.display_name,
  this.virtualpin= data.virtual_pin,
  this.minvalue= data.min,
  this.maxvalue = data.max,
  this.stepvalue = data.step_value,
  this.allow_user = data.allow_user
  }
  displayname='';
  virtualpin: any;
  minvalue:any;
  maxvalue:any;
  stepvalue:any;
  allow_user:any;
  onSlider(){

  }
}
