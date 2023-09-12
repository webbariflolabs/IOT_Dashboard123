
import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-dialog-content1',
  templateUrl: './dialog-content1.component.html',
  styleUrls: ['./dialog-content1.component.css']
})
export class DialogContent1Component {
  constructor(private ts:DataSharingService ) {
    // this.loginform-this.formBuilder.group
  }

  labelvalue=''
  labelcolor=''
  buttonlabel=false



  showListlabel:any[]=[]
  newlabel=''

  addforlabel(){
    this.ts.addforserviceLabel(this.newlabel)
  }

  deleteLabel(index:any){
    // this.ts.
    this.ts.deleteAddService(index)
  }

  ngOnInit():void{
  this.showListlabel=this.ts.labelList
  // if(this.labelvalue==='' &&this.labelcolor===''){
  //   this.buttonlabel=true
  //  }else{
  //   this.buttonlabel=false
  //   console.log("Naresh")
  //  }
  }

  onSubmitLable(){
   
  console.log("naresh")
  }

}