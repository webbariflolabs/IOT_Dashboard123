import { Component, Inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {

  deletedataUser:any;
  constructor(@Inject(MAT_DIALOG_DATA)  public data:any,private auth:AuthenticationService,private dialogRef:MatDialogRef<UserDeleteComponent>) { 
      console.log(data)
      this.deletedataUser=data
  }


 async confirmUserDelete(){
    console.log(this.deletedataUser)
  await  this.auth.DeleteAdmin(this.deletedataUser).subscribe(

      (res)=>
      {console.log(res)
      },
      err=>console.log(err)
    )
    window.location.reload()
    this.dialogRef.close();
  }

  closeUserDelete(){
    this.dialogRef.close();
  }
  

}