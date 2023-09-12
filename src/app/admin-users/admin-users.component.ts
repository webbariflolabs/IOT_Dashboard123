import { Component, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { Dialog } from '@angular/cdk/dialog';
import { AuthenticationService } from '../authentication.service';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { DataSharingService } from '../data-sharing.service';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;


  constructor(public dialog: MatDialog, private router: Router, private auth: AuthenticationService, private dataSharingService: DataSharingService) {
    // this.loginform-this.formBuilder.group
  }

  openDialog2(): void {
    
    const dialogRef = this.dialog.open(AddNewUserComponent, {
      width: '700px',
      
    });

    //  dialogRef.afterClosed().subscribe(result => {
    //    console.log('The dialog was closed')
      
    // });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'submitted') {
        // Reload the current route to refresh the page
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./admin-users']);
      }
    });
    
   
  }
  
  onLogout():void{
    this.router.navigate(['/login'])


  }
  onLogout1():void{
    this.router.navigate(['/login'])


  }
  
  onDeleteUser(mobileno:any):void{
    const dialogRef = this.dialog.open(UserDeleteComponent,{
      width:'300px',
      data: mobileno
    })
  
    dialogRef.afterClosed().subscribe(result=>{
      console.log("dialog is closed")
    })
      
   }



 openDialog3(data:any): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '700px',
      data:data
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

  onPermissions(mobino:any):void{
    this.router.navigate(['./user-permissions']);
    this.dataSharingService.setmob(mobino);
  }

 onAccounts(mob:any):void{
  this.router.navigate(['./user-accounts'])
  this.dataSharingService.setData(mob);
  localStorage.setItem('mobno',JSON.stringify(mob))
  
 }

userData:any =[]
userStoreData:any;
userNameProfile:any;

 ngOnInit(): void {
   
this.userStoreData=localStorage.getItem('userData')
const userDataObject = JSON.parse(this.userStoreData);
this.userNameProfile=userDataObject.userName
 


  this.auth.getData().subscribe((response)=>{this.userData = response
  console.log(this.userData) }
  ,

  error =>
    console.log(error)
  )
     
 }





}
