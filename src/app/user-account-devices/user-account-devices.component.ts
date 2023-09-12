import { Component, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserNewDeviceComponent } from '../user-new-device/user-new-device.component';
import { EditComponent } from '../dashboard/edit/edit.component';
import { DataSharingService } from '../data-sharing.service';
import { AuthenticationService } from '../authentication.service';
import { Edit5Component } from '../action/edit5/edit5/edit5.component';
import { UserDeviceDeleteComponent } from '../user-device-delete/user-device-delete.component';


@Component({
  selector: 'app-user-account-devices',
  templateUrl: './user-account-devices.component.html',
  styleUrls: ['./user-account-devices.component.css']
})
export class UserAccountDevicesComponent implements OnInit{
  events: string[] = [];
  opened: boolean = true;


  subMenuStates: { [key: string]: boolean } = {};


  accountid:any;
 

  constructor(private auth: AuthenticationService ,public dialog: MatDialog, private router: Router, private dataSharingService: DataSharingService) {}

  openDialog7(): void {
    const dialogRef = this.dialog.open(UserNewDeviceComponent, {
      width: '400px'
      
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    });

    // this.router.navigate(['./user-new-device'])

    
    
  }

  openDialog8(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
     
      
    });

    
    
  }
  
  onLogout():void{
    this.router.navigate(['/login'])

  }


  onLogout1():void{
    this.router.navigate(['/login'])

  }
  // openDialog10(): void {
  //   const dialogRef = this.dialog.open(CardComponent, {
  //     width: '250px',
  //     data: { accountId: this.accountId, accountName: this.accountName },
      
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed')
  //     this.accountId = result;
  //     this.accountName = result;
      
  //   });

    
  // }





  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }


  onEditDevice(devicedetails:any): void {
    const dialogRef = this.dialog.open(Edit5Component,{
      width: '400px',
      data:devicedetails
    })

    dialogRef.afterOpened().subscribe(result=>
      console.log('dialog closed'))
   
  }

  onClick8(deviceid:any): void {
    this.router.navigate(['./device-stats']);
    this.dataSharingService.sendAccountId(deviceid)
  }

  
// onCheck(){
//   this.router.navigate(['./mqtt-device'])
//   console.log("heelo")
// }
  
  devicedetails:any=[]

 
 onDeleteDevice(deviceid:any){
  const dialogRef = this.dialog.open(UserDeviceDeleteComponent,{
    width: '400px',
    data: deviceid
  })

  dialogRef.afterOpened().subscribe(result=>
    console.log('dialog closed'))
 

 }
 userStoreData:any;
 userNameProfile:any;

 deviceId:any;

  ngOnInit(): void {

this.userStoreData=localStorage.getItem('userData')
const userDataObject = JSON.parse(this.userStoreData);
this.userNameProfile=userDataObject.userName
    const savedaccount  = localStorage.getItem('accountId');
    if (savedaccount){
      const getaccountid = JSON.parse(savedaccount);
      this.auth.onFetchDevices(getaccountid).subscribe(response=>{
        console.log(response)
        this.devicedetails = response

      }
        ,
        (error) =>
        console.log(error))
  }

  else{
    this.accountid = this.dataSharingService.getAccountId();
    this.auth.onFetchDevices(this.accountid).subscribe(response=>{
      console.log(response)
      this.devicedetails = response

    }
      ,
      (error) =>
      console.log(error))

  }



    }


      
     
  


}
