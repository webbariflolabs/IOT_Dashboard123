import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-create-new-device',
  templateUrl: './admin-create-new-device.component.html',
  styleUrls: ['./admin-create-new-device.component.css']
})
export class AdminCreateNewDeviceComponent {
  devicename='';
  deviceversion:any;
  ischecked='';
   constructor(private auth:AuthenticationService, private dialogRef: MatDialogRef<AdminCreateNewDeviceComponent>){}


  onCreateDevice(){
    const devicedetails= {typename: this.devicename, typeversion: this.deviceversion}
    this.auth.onPostDevices(devicedetails).subscribe(response=>
      console.log(response),
      error=>
      console.log(error)
      );
      window.location.reload();
      this.dialogRef.close()
  }
  
}
