import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardComponent } from '../dashboard/card/card/card.component';
import { EditComponent } from '../dashboard/edit/edit.component';
import { DataSharingService } from '../data-sharing.service';
import { AuthenticationService } from '../authentication.service';  
import { UserAccountDeleteComponent } from '../user-account-delete/user-account-delete.component';
@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.css']
})
export class UserAccountsComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;


  constructor(private auth:AuthenticationService, public dialog: MatDialog, private router: Router,private dataSharingService: DataSharingService) {
    // this.loginform-this.formBuilder.group
  }

  
  onLogout():void{
    this.router.navigate(['/login'])


  }
  onLogout1():void{
    this.router.navigate(['/login'])


  }
  
  
  openDialog(): void {
    
    const dialogRef = this.dialog.open(CardComponent, {
      width: '400px',
      
    });
    
   

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      
    });
   
  }


  openDialog1(data:any): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '400px',
      data:data
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      
    });

    
    
  }

  onDeleteAccount(accountid:any){
    const dialogRef = this.dialog.open(UserAccountDeleteComponent, {
      width: '400px',
      data:accountid
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      
    });

  }
    
    
  
  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }

  onPermissions():void{
    this.router.navigate(['./user-permissions']);
  }

 onAccounts():void{
  this.router.navigate(['./user-accounts'])
 }

 onClick(accountid:any){
  this.dataSharingService.sendAccountId(accountid);
  this.router.navigate(['./user-account-devices']);
  localStorage.setItem('accountId', JSON.stringify(accountid))
}
mobileno ="";

accountsData:any=[];
userStoreData:any;
userNameProfile:any;

 ngOnInit(): void {
     
this.userStoreData=localStorage.getItem('userData')
const userDataObject = JSON.parse(this.userStoreData);
this.userNameProfile=userDataObject.userName
   
  const savedmob =localStorage.getItem('mobno')
  console.log(savedmob)
  
  if(savedmob){
    const getmob = JSON.parse(savedmob)
    const mobData = {mobileno: getmob}

    this.auth.onGetAccounts(mobData).subscribe(response=>
      {console.log(response), 
      this.accountsData = response}
       
      ,
      error=>console.log(error))
  
  }
  
else{
  this.mobileno = this.dataSharingService.getData();
    console.log(this.mobileno);

    


    this.dataSharingService.sendMobile(this.mobileno);
    const mobData = {mobileno: this.mobileno}
    this.auth.onGetAccounts(mobData).subscribe(response=>
      {console.log(response), 
      this.accountsData = response}
       
      ,
      error=>console.log(error))
  }
  
}



}
