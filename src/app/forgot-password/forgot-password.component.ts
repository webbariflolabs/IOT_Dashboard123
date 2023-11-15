import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
constructor(private router:Router, private auth: AuthenticationService){}
errorMsg=''
forgotMob:any;
  onForgot(){

    if (this.forgotMob !== undefined){
      this.auth.onForgotPassword(this.forgotMob).subscribe(response=>
        console.log(response), error=>
        console.log(error))
    this.router.navigate(['./forgot-check'])
    localStorage.setItem('forgotPass',JSON.stringify(this.forgotMob))
      
    }
    else{
      this.errorMsg ='*Please Enter the Email Id!'
    }

   

  }
}
