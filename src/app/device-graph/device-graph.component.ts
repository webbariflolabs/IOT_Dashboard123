import { Component,Inject } from '@angular/core';

import { DataSharingService } from '../data-sharing.service';
import { AuthenticationService } from '../authentication.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-device-graph',
  templateUrl: './device-graph.component.html',
  styleUrls: ['./device-graph.component.css']
})
export class DeviceGraphComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data:any, private auth:AuthenticationService,private dataSharingService: DataSharingService){
    this.labelname= data.label,
    this.labelcolor= data.color,
    this.displayname= data.display_name,
    this.allow_user = data.allow_user
  }

  labelname=''
  labelcolor=''
  displayname='';
  allow_user= false;


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

 

 
    onLineGraph(){
      
    }

}
