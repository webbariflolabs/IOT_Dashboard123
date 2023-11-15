
import { Component,OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DataSharingService } from '../data-sharing.service';
import { DeviceAddMsgComponent } from '../device-add-msg/device-add-msg.component';


@Component({
  selector: 'app-register-add-device',
  templateUrl: './register-add-device.component.html',
  styleUrls: ['./register-add-device.component.css']
})
export class RegisterAddDeviceComponent implements OnInit{
  constructor(@Inject (MAT_DIALOG_DATA) public data:any,public dialog: MatDialog, private router: Router, private auth: AuthenticationService, private dataSharingService: DataSharingService, private dialogRef: MatDialogRef<RegisterAddDeviceComponent>) {
    // this.loginform-this.formBuilder.group
  }
  selectdevice : string="";
  devicename: string="";

  
  
errorMsg ="";
showError=false;

async onAddDevice(){
  this.errorMsg =""
  this.showError=false;
  if (this.devicename !== "" && this.selectdevice !== ""){
    const accountid = this.data;
    const deviceDetails = {accountid:accountid, devicename: this.devicename,devicetype: this.selectdevice}
   await this.auth.addRegisterDevice(deviceDetails).subscribe(response=>
      console.log(response),
      error=>
      console.log(error))
      this.dialogRef.close();
    
    const dialogAdd = this.dialog.open(DeviceAddMsgComponent,{
      width:'400px',
    })

    await setTimeout(()=>{
      dialogAdd.close();
    },2000)

    



  }
  else{
    this.errorMsg = "*Please Enter all fields values"
  }
  // if (this.showError) {
  //   this.errorMsg = "*Device already Exists! Choose another Name";
  // }
  
}
devicedetails: any=[];

ngOnInit(): void {
  this.auth.onGetDeviceTypes().subscribe(response=>
    {console.log(response),
    this.devicedetails = response},
    error=>
    console.log(error) )
}
onClose(){
  this.dialogRef.close()
}


}

