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


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  opened: boolean = true;
  accountId: string[] = [];
  accountName: string[] = [];

  constructor(public dialog: MatDialog, private router: Router, private auth: AuthenticationService, private dataSharingService: DataSharingService) {}

  openDialog7(): void {
   const dialogRef = this.dialog.open(GeneralNewDeviceComponent, {
      width: '400px'
      
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });



    
    
  }

  openDialog8(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });

    
    
  }
  
  onLogout():void{
    this.router.navigate(['/login'])

  }


  onLogout1():void{
    this.router.navigate(['/login'])

  }
  openDialog10(): void {
    const dialogRef = this.dialog.open(CardComponent, {
      width: '250px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });

    
  }



  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }


  onClick7(devicedetails:any): void {
    const dialogRef = this.dialog.open(Edit5Component,{
      width: '400px',
      data:devicedetails
    })

    dialogRef.afterOpened().subscribe(result=>
      console.log('dialog closed'))

  }

  onClick8(): void {
    this.router.navigate(['./device-stats']);
  }


  onDelete(deviceid:any){
    const dialogRef = this.dialog.open(UserDeviceDeleteComponent,{
      width: '400px',
      data: deviceid
    })
  
    dialogRef.afterOpened().subscribe(result=>
      console.log('dialog closed'))
   
  
  }



  getAccounts:any=[]
  permission= {usercreate: false,
    useredit: false,
    userdelete: false,
    userview: false,
    accountcreate: false,
    accountedit: false,
    accountdelete: false,
    accountview: false,
    devicecreate: false,
    deviceedit: false,
    deviceview: false,
    devicedelete: false,
    deviceinstruction: false,
    setting: false,
    userid: ''}
    userPermissions:any={}
    permissData:any =[]
    devicedetails: any=[]
    accountid: any
    userStoreData:any;
    userNameProfile:any;
  
  
  
  
  
  
    ngOnInit(): void {
      // const savedlogmob = localStorage.getItem('logMob');
  
      this.userStoreData=localStorage.getItem('userData')
   
   
    const userDataObject = JSON.parse(this.userStoreData);
      this.userNameProfile=userDataObject.userName
      console.log(this.userNameProfile)
    const savedlogmob = localStorage.getItem('logMob');

    if (userDataObject){
      // const getlogmob = JSON.parse(savedlogmob);
      const userDataObject = JSON.parse(this.userStoreData);

      const receivedData=userDataObject.mobileno

      console.log(this.permission.accountview)

      

        this.auth.onFetchpermissions(receivedData).subscribe(response =>
          { console.log(response),
         this.userPermissions = response,
         this.permissData=this.userPermissions.message,
         
         
         this.permission = {usercreate: this.permissData.user_create,
           useredit: this.permissData.user_edit,
           userdelete: this.permissData.user_delete,
           userview: this.permissData.user_view,
           accountcreate: this.permissData.account_create,
           accountedit: this.permissData.account_edit,
           accountdelete: this.permissData.account_delete,
           accountview: this.permissData.account_view,
           devicecreate: this.permissData.device_create,
           deviceedit: this.permissData.device_edit,
           deviceview: this.permissData.device_view,
           devicedelete: this.permissData.device_delete,
           deviceinstruction: this.permissData.deviceinstruction,
           setting: this.permissData.settings,
           userid: "0"
           },
       console.log(this.permission);
         
       if (this.permission.deviceview === true){
        const savedaccount  = localStorage.getItem('logaccountId');
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
        this.accountid = this.dataSharingService.getLoginAccountId();
        this.auth.onFetchDevices(this.accountid).subscribe(response=>{
          console.log(response)
          this.devicedetails = response
    
        }
          ,
          (error) =>
          console.log(error))
    
      }

      }
},
         error=>
         console.log(error))


      

    }

    else{
      const logmob = this.dataSharingService.loginGetMob();

      
      

        this.auth.onFetchpermissions(logmob).subscribe(response =>
          { console.log(response),
         this.userPermissions = response,
         this.permissData=this.userPermissions.message,
         
         
         this.permission = {usercreate: this.permissData.user_create,
           useredit: this.permissData.user_edit,
           userdelete: this.permissData.user_delete,
           userview: this.permissData.user_view,
           accountcreate: this.permissData.account_create,
           accountedit: this.permissData.account_edit,
           accountdelete: this.permissData.account_delete,
           accountview: this.permissData.account_view,
           devicecreate: this.permissData.device_create,
           deviceedit: this.permissData.device_edit,
           deviceview: this.permissData.device_view,
           devicedelete: this.permissData.device_delete,
           deviceinstruction: this.permissData.deviceinstruction,
           setting: this.permissData.settings,
           userid: "0"
           },
       console.log(this.permission);
       if (this.permission.deviceview === true){
        const savedaccount  = localStorage.getItem('logaccountId');
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
        this.accountid = this.dataSharingService.getLoginAccountId();
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

        )


    }

  }
}