import { Component,Inject ,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-assign-controls',
  templateUrl: './assign-controls.component.html',
  styleUrls: ['./assign-controls.component.css']
})
export class AssignControlsComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data:any, private auth:AuthenticationService){}
  isToggleOn: boolean = false;
  sliderValue: number = 2;
  minValue = 0;
  maxValue = 10;
  stepValue = 1;
  onSliderInput() {
    // Handle slider input changes here
    console.log('Slider value changed:', this.sliderValue);
  }
  controlDetails:any;
  filteredControls:any;

  ngOnInit(): void {
    console.log(this.data)
      this.auth.onAssignedControlsView(this.data[2], this.data[3]).subscribe(response=>
        {this.controlDetails = response;
          console.log(this.controlDetails);
         this.filteredControls = this.controlDetails.filter((item:any)=> 'button' in item || 'slider' in item);
          console.log(this.filteredControls)
        }, error=> console.log(error))

  }


  
}
