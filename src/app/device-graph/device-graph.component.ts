import { Component,Inject } from '@angular/core';

import { DataSharingService } from '../data-sharing.service';
import { AuthenticationService } from '../authentication.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-device-graph',
  templateUrl: './device-graph.component.html',
  styleUrls: ['./device-graph.component.css']
})
export class DeviceGraphComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data:any, private auth:AuthenticationService,private dataSharingService: DataSharingService, private dialog:MatDialogRef<DeviceGraphComponent>){
    this.labelname= data.data.label,
    this.labelcolor= data.data.color,
    this.displayname= data.data.display_name ,
    this.allow_user = data.allow_user;
    const oldDisplayname = data.data.display_name ;
    const oldLabelName= data.data.label;
     this.graphDetails = {oldDisplayname,oldLabelName};
  }

  labelname=''
  labelcolor=''
  displayname='';
  allow_user= false;
  graphDetails:any;

  showListlabel:any[]=[]
  newlabel=''

  // addforlabel(){
  //   this.ts.addforserviceLabel(this.newlabel)
  // }

  // deleteLabel(index:any){
  //   // this.ts.
  //   this.ts.deleteAddService(index)
  // }

  // ngOnInit():void{
  // this.showListlabel=this.ts.labelList
  // // if(this.labelvalue==='' &&this.labelcolor===''){
  // //   this.buttonlabel=true
  // //  }else{
  // //   this.buttonlabel=false
  // //   console.log("Naresh")
  // //  }
  // }

 

 
   async onLineGraph(){
      const lineDetails = {type_name: this.data.deviceDetails.type_name, type_ver: this.data.deviceDetails.type_ver, control_key: 'graph', old_dis_name: this.graphDetails.oldDisplayname,old_label_name: this.graphDetails.oldLabelName,new_dis_name: this.displayname,new_label_name: this.labelname,new_alwusr:this.allow_user,new_color:this.labelcolor}
      

      try {
         await this.auth.onGraphUpdate(lineDetails).subscribe(response=>
            {console.log(response)
            
                 
     if(response.message === 'Graph updated'){
                                      
      this.dialog.close();
  
      // Reload the page
      window.location.reload();
}
            
            },error=>
            console.log(error))
       

      } catch (error) {
               // Handle errors here (e.g., show an error message)
               console.error('Error while adding control:', error);
             }
     
     
     
    }

}
