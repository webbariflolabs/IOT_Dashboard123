import { Component, Inject } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { AuthenticationService } from '../authentication.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data:any, private auth:AuthenticationService,private dataSharingService: DataSharingService){}
slider_dis_name='';
slider_pin: any;
slider_min:any;
slider_max:any;
  stepvalue:any;
  sliderDetails:any;
  slider_step_value:any;
  slider_allow_user= false;
  onSlider(){
    this.sliderDetails = {slider_dis_name: this.slider_dis_name, slider_pin:this.slider_pin,slider_min:this.slider_min,slider_max:this.slider_max,slider_step_value:this.slider_step_value,type_name: this.data.type_name,type_ver: this.data.type_ver, slider_allow_user: this.slider_allow_user}
    this.auth.onDeviceSlider(this.sliderDetails).subscribe(response=>
      console.log(response), error=>
      console.log(error))
  }
}
