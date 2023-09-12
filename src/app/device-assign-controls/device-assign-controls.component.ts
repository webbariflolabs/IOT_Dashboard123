// import { Component } from '@angular/core';
// import { ThemePalette } from '@angular/material/core';
// import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { DialogContentComponent } from '../dialog-content/dialog-content.component';
// import { DialogContent1Component } from '../dialog-content1/dialog-content1.component';
// import { DialogContent2Component } from '../dialog-content2/dialog-content2.component';
// import { DialogContent3Component } from '../dialog-content3/dialog-content3.component';

// export interface Task {
//   name: string;
//   completed: boolean;
//   color: ThemePalette;
//   subtasks?: Task[];
// }


// @Component({
//   selector: 'app-device-assign-controls',
//   templateUrl: './device-assign-controls.component.html',
//   styleUrls: ['./device-assign-controls.component.css']
// })
// export class DeviceAssignControlsComponent {
//   events: string[] = [];
//   opened: boolean = false;
//   shouldRun: boolean = true;
//   accountId: string[] = [];
//   accountName: string[] = [];
//   admin:string[] = [];


//   constructor(private router: Router, public dialog : MatDialog ) {
//     // this.loginform-this.formBuilder.group
//   }


//   subMenuStates: { [key: string]: boolean } = {};

  
//   task: Task = {
//     name: 'Indeterminate',
//     completed: false,
//     color: 'primary',
    
//   };

  
//   /*openDialog6(): void {
//     const dialogRef = this.dialog.open(Edit4Component, {
//       width: '480px',
//       data: { accountId: this.accountId, accountName: this.accountName },
      
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed')
//       this.accountId = result;
//       this.accountName = result;
      
//     });
// */

// openDialog(): void {
//   const dialogRef = this.dialog.open(DialogContentComponent, {
//     width: '600px', // Set the desired width
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('Dialog closed:', result);
//   });
// }

// openDialog1(): void {
//   const dialogRef = this.dialog.open(DialogContent1Component, {
//     width: '700px', // Set the desired width
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('Dialog closed:', result);
//   });
// }

// openDialog2(): void {
//   const dialogRef = this.dialog.open(DialogContent2Component, {
//     width: '500px', // Set the desired width
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('Dialog closed:', result);
//   });
// }

// openDialog3(): void {
//   const dialogRef = this.dialog.open(DialogContent3Component, {
//     width: '500px', // Set the desired width
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('Dialog closed:', result);
//   });
// }

  
 

  


//   // ():void{
//   //   this.http.post("http://127.0.0.1:8000/admin",DialogData)
//   // }

  
  
 

//   toggleSubMenu(subMenuKey: string): void {
//     this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
//   }

//   isSubMenuOpen(subMenuKey: string): boolean {
//     return this.subMenuStates[subMenuKey] || false;
//   }




//   onLogout1():void{
//     this.router.navigate(['/login'])


//   }

//   onLogout():void{
//     this.router.navigate(['/login'])


//   }

// }



import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { DialogContent1Component } from '../dialog-content1/dialog-content1.component';
import { DialogContent2Component } from '../dialog-content2/dialog-content2.component';
import { DialogContent3Component } from '../dialog-content3/dialog-content3.component';
import { DataSharingService } from '../data-sharing.service';
import { DeleteAssignControlsComponent } from '../delete-assign-controls/delete-assign-controls.component';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


@Component({
  selector: 'app-device-assign-controls',
  templateUrl: './device-assign-controls.component.html',
  styleUrls: ['./device-assign-controls.component.css']
})
export class DeviceAssignControlsComponent {
  events: string[] = [];
  opened: boolean = true;
  shouldRun: boolean = true;
  accountId: string[] = [];
  accountName: string[] = [];
  admin:string[] = [];
  onofbutton:string="On Off Button"                                                                                                                                                                                                                                                                                                                        
  sliderInputbutton:string='Slider Input'
  showListcontrol:any[]=[]
  linebutton:string='Line Graph'
  labelbutton:string='Label'

  constructor(private router: Router, public dialog : MatDialog,private ts:DataSharingService ) {
    // this.loginform-this.formBuilder.group
  }


  subMenuStates: { [key: string]: boolean } = {};

  
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    
  };

  
 


openDialogEdit(Editcontrolvalue:any):void{
  if(Editcontrolvalue==='Line Graph'){
    const dialogRef = this.dialog.open(DialogContent1Component, {
      width: '600px', // Set the desired width
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
  
  
    });

  }else if(Editcontrolvalue==='Slider Input'){
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '600px', // Set the desired width
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
  
  
    });
  }else if(Editcontrolvalue==='Label'){
    const dialogRef = this.dialog.open(DialogContent2Component, {
      width: '600px', // Set the desired width
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    
  
    });
  }else if(Editcontrolvalue==='On Off Button'){
    const dialogRef = this.dialog.open(DialogContent3Component, {
      width: '600px', // Set the desired width
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
  
  
    });
  }






}

onofbuttonAdd(): void {

  
  this.ts.addControlAssign(this.onofbutton)
  
}
sliderInputAdd(){
  this.ts.addControlAssign(this.sliderInputbutton)
   
}

labelAdd(){
  this.ts.addControlAssign(this.labelbutton)

}

linegraphAdd(){
  this.ts.addControlAssign(this.linebutton)

}

openDialog1(): void {
  const dialogRef = this.dialog.open(DialogContent1Component, {
    width: '700px', // Set the desired width
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}

openDialog2(): void {
  const dialogRef = this.dialog.open(DialogContent2Component, {
    width: '500px', // Set the desired width
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}

openDialog3(): void {
  const dialogRef = this.dialog.open(DialogContent3Component, {
    width: '500px', // Set the desired width
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}

saveconfigcontrol(){
  localStorage.setItem('controlList',JSON.stringify(this.showListcontrol))
}

  
 

  


  // ():void{
  //   this.http.post("http://127.0.0.1:8000/admin",DialogData)
  // }

  
  
 

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
  userStoreData:any;
  userNameProfile:any;
  
   ngOnInit(): void {
     
  this.userStoreData=localStorage.getItem('userData')
  const userDataObject = JSON.parse(this.userStoreData);
  this.userNameProfile=userDataObject.userName
    this.showListcontrol=this.ts.listcontrol
    const eachItem=this.ts.listcontrol
    console.log(eachItem)

        

       const storedControlList = localStorage.getItem('controlList');
       console.log(storedControlList)

    // if (storedControlList) {
    //   this.showListcontrol = JSON.parse(storedControlList);
    // } else {
    //   this.showListcontrol = this.ts.listcontrol; 
    // }

  }

  // removecontrol(index:number){
  //   this.ts.deletecontrol(index)
  // }

  
  removecontrol(index:number):void{
    const dialogRef = this.dialog.open(DeleteAssignControlsComponent,{
      width:'300px',
      data:index
    })
  
    dialogRef.afterClosed().subscribe(result=>{
      console.log("dialog is closed")
    })
      
   }


}


