
import { Component,Inject } from '@angular/core';

import { DataSharingService } from '../data-sharing.service';
import { AuthenticationService } from '../authentication.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-content3',
  templateUrl: './dialog-content3.component.html',
  styleUrls: ['./dialog-content3.component.css']
})
export class DialogContent3Component {
  constructor(@Inject (MAT_DIALOG_DATA) public data:any, private auth:AuthenticationService,private dataSharingService: DataSharingService){}
  btn_pin:any;
  btn_dis_name='';
    buttonDetails:any;
    alw_usr= false;
  
   onOnOff(){
    this.buttonDetails = {btn_dis_name: this.btn_dis_name, btn_pin:this.btn_pin,type_name: this.data.type_name,type_ver: this.data.type_ver, alw_usr: this.alw_usr}
        this.auth.onDeviceOnOff(this.buttonDetails).subscribe(response=>
          console.log(response), error=>
          console.log(error))
      }
}
