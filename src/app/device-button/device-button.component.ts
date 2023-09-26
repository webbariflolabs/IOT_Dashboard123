
import { Component,Inject } from '@angular/core';

import { DataSharingService } from '../data-sharing.service';
import { AuthenticationService } from '../authentication.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-device-button',
  templateUrl: './device-button.component.html',
  styleUrls: ['./device-button.component.css']
})

export class DeviceButtonComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data:any, private auth:AuthenticationService,private dataSharingService: DataSharingService){
    this.btn_pin= data.virtual_pin;
    this.btn_dis_name= data.display_name;
    this.alw_usr = data.allow_user;
   const oldDisplayName= data.display_name;
    const oldVirtualPin = data.virtual_pin;
    this.details = {oldDisplayName:oldDisplayName, oldVirtualPin: oldVirtualPin, }

  }
  btn_pin:any;
  btn_dis_name='';
  alw_usr=false;
  details:any;

  
    onOnOff(){
      console.log(this.details);
      console.log(this.btn_pin)
      console.log(this.btn_dis_name)
  
     

    }
  }


 