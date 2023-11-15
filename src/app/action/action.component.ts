import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardComponent } from '../dashboard/card/card/card.component';
import { EditComponent } from '../dashboard/edit/edit.component';
import { AuthenticationService } from '../authentication.service';
import { DataSharingService } from '../data-sharing.service';
import { Edit5Component } from './edit5/edit5/edit5.component';
import { GeneralNewDeviceComponent } from '../general-new-device/general-new-device.component';
import { UserDeviceDeleteComponent } from '../user-device-delete/user-device-delete.component';
import { AssignControlsComponent } from '../assign-controls/assign-controls.component';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

 
  devicedetails:any=[]
  events: string[] = [];
  opened: boolean = true;
  onOff=false;

  // addDevice() {
  //   const newDevice = {
  //     id: this.generateUniqueId(), // You can implement your own unique ID generation logic
     
  //     onOff: false // Default status is OFF
  //   };
  //   console.log(newDevice)

  //   this.devicedetails.result.push(newDevice);
  // }

  // private generateUniqueId() {
  //   // Implement your own logic to generate a unique ID here
  //   // This is just a placeholder
  //   return Math.floor(Math.random() * 1000);
  // }

  subMenuStates: { [key: string]: boolean } = {};


  accountid:any;
 

  constructor(private auth: AuthenticationService ,public dialog: MatDialog, private router: Router, private dataSharingService: DataSharingService) {}

  // openDialog7(): void {
  //   const dialogRef = this.dialog.open(UserNewDeviceComponent, {
  //     width: '400px'
      
  //   });



  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed')
  //   });

    

    
    
  // }

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

  onClick8(device:any): void {
    this.router.navigate(['./general-user-graph']);
  
    this.dataSharingService.sendAccountId(device[0]);

    localStorage.setItem('setdeviceId', JSON.stringify(device[0]) )

    localStorage.setItem('deviceType',JSON.stringify(device))

      // Redirect to the desired page
      // setTimeout(() => {
      //   location.reload();
      // }, 10)
  }

  
// onCheck(){
//   this.router.navigate(['./mqtt-device'])
//   console.log("heelo")
// }
  
 

 
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
 cardStates: boolean[] = [];
 deviceId:any;

  ngOnInit(): void {

 
    // Initialize the toggle state for each card
    this.cardStates = new Array(this.devicedetails.length).fill(false);
 
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

    onClickControls(data:any){
      const dialogRef = this.dialog.open(AssignControlsComponent,{
        width: '800px',
        height: '400px',
        data:data,
      })
    
      dialogRef.afterOpened().subscribe(result=>
        console.log('dialog closed'))
     
    }

    onButtonChange(index: number): void {
      // Toggle the state of the card at the given index
      this.cardStates[index] = !this.cardStates[index];
      console.log(this.cardStates)
    }

}