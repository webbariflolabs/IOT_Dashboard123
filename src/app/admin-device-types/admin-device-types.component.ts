import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminCreateNewDeviceComponent } from '../admin-create-new-device/admin-create-new-device.component';
import { DeviceEditComponent } from '../device-edit/device-edit.component';
import { AuthenticationService } from '../authentication.service';
import { DeleteDeviceTypeComponent } from '../delete-device-type/delete-device-type.component';
@Component({
  selector: 'app-admin-device-types',
  templateUrl: './admin-device-types.component.html',
  styleUrls: ['./admin-device-types.component.css']
})
export class AdminDeviceTypesComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  shouldRun: boolean = true;
  accountId: string[] = [];
  accountName: string[] = [];
  admin:string[] = [];
 

  constructor(private router: Router, public dialog : MatDialog, private auth: AuthenticationService ) {
    // this.loginform-this.formBuilder.group
  }



  // ():void{
  //   this.http.post("http://127.0.0.1:8000/admin",DialogData)
  // }

  
  
  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }




  onLogout1():void{
    this.router.navigate(['/login'])


  }

  onLogout():void{
    this.router.navigate(['/login'])


  }


  onAddDeviceType(): void {
    const dialogRef = this.dialog.open(AdminCreateNewDeviceComponent, {
      width: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {      
    });
    
}

onEditDevice(devices:any):void{
  const dialogRef = this.dialog.open(DeviceEditComponent, {
    width: '400px',
    data: devices
  });

  dialogRef.afterClosed().subscribe(result => {      
  });
}


onAssignedCntrls():void{
  this.router.navigate(['./device-assign-controls'])

}

devicedetails:any=[];

userStoreData:any;
userNameProfile:any;

 ngOnInit(): void {
   
this.userStoreData=localStorage.getItem('userData')
const userDataObject = JSON.parse(this.userStoreData);
this.userNameProfile=userDataObject.userName
    this.auth.onGetDeviceTypes().subscribe(response=>
    {console.log(response),
    this.devicedetails = response},
    error=>
    console.log(error) )
}


onDeleteDevice(device:any){
  const dialogRef = this.dialog.open(DeleteDeviceTypeComponent, {
    width: '400px',
    data: device
  });

  dialogRef.afterClosed().subscribe(result => {      
  });
}

}