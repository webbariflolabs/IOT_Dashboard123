import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from '../authentication.service';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent {

  devicename='';
  deviceversion:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private auth: AuthenticationService, private dataSharingService: DataSharingService){
    this.devicename= data[0],
    this.deviceversion = data[1]
  }

  onEditDeviceType(){



    const devicedetails = {olddevicetypename: this.devicename , olddevicetypeversion: this.deviceversion, newtypename: this.data[0], newtypeversion: this.data[1]}
  this.auth.onEditDeviceDetails(devicedetails).subscribe(response=>
    console.log(response),
    error=>
    console.log(error))
    window.location.reload()

  }

}
