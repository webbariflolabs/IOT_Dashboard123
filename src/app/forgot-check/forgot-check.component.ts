import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-check',
  templateUrl: './forgot-check.component.html',
  styleUrls: ['./forgot-check.component.css']
})
export class ForgotCheckComponent {

  phoneNumber:any;
  response:any;
  code:any;

  constructor(private auth:AuthenticationService, private router:Router){
    this.response = localStorage.getItem('forgotPass')
    this.phoneNumber = JSON.parse(this.response)
  }

  onOTPCheck(){
    this.auth.onCheckOTP(this.code).subscribe(response=>
      {console.log(response)
      // if (response.message === ''){
      //   this.router.navigate(['./password-success'])
      // }
      
      }, error=>
      console.log(error))
  }


}
