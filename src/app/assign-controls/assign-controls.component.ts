import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-controls',
  templateUrl: './assign-controls.component.html',
  styleUrls: ['./assign-controls.component.css']
})
export class AssignControlsComponent {
  isToggleOn: boolean = false;
  sliderValue: number = 2;
  minValue = 0;
  maxValue = 10;
  stepValue = 1;
  onSliderInput() {
    // Handle slider input changes here
    console.log('Slider value changed:', this.sliderValue);
  }
  
}
