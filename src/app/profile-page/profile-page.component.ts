import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  opened= true;
  dob='';
  adhaarFile: File | null = null;
  panFile: File | null = null;
  landFile: File | null = null;
  electricityFile: File | null = null;

  onFileSelected(event: any) {
    this.adhaarFile = event.target.files[0];
  }

  onLandSelected(event: any) {
    this.landFile = event.target.files[0];
  }

  onPanSelected(event: any) {
    this.panFile = event.target.files[0];
  }

   onElectricitySelected(event:any){
    this.electricityFile = event.target.files[0];
   }
  constructor(private router:Router){}
  
  onLogout():void{
    this.router.navigate(['/login'])
    console.log("nn")

  }
  onLogout1():void{
    this.router.navigate(['/login'])
    console.log("nn")

  }
  user: any = {};
  userStoreData:any;
  userNameProfile:any;
  ngOnInit(): void {
    // const savedlogmob = localStorage.getItem('logMob');

    this.userStoreData=localStorage.getItem('userData')
 
  // console.log(this.userStoreData)
  const userDataObject = JSON.parse(this.userStoreData);
    this.userNameProfile=userDataObject.userName
    console.log(this.userNameProfile)}

    onSubmit() {
      // Handle the registration logic here, e.g., send a POST request to your server
      console.log('Registration data:', this.user);
    
    }
}
