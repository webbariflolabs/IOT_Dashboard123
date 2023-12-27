import { Component,ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  encapsulation: ViewEncapsulation.None  //
})
export class RegisterPageComponent {
  user: any = {}; // This object will hold the user's registration data
  dob: string = '';
  adhaarFile: File | null = null;
  panFile: File | null = null;
  landFile: File | null = null;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  numberFormControl = new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]);

  matcher = new MyErrorStateMatcher();

  onFileSelected(event: any) {
    this.adhaarFile = event.target.files[0];
  }

  onLandSelected(event: any) {
    this.landFile = event.target.files[0];
  }

  onPanSelected(event: any) {
    this.panFile = event.target.files[0];
  }

  onSubmit() {
    // Handle the registration logic here, e.g., send a POST request to your server
    console.log('Registration data:', this.user);
    console.log('date of birth:', this.dob );
    if (this.adhaarFile) {
      // Upload the file here using a service or an HTTP request
    }
  }

//uploading document to server
// import { HttpClient } from '@angular/common/http';

// // ...

// constructor(private http: HttpClient) {}

// onSubmit() {
//   if (this.adhaarFile) {
//     const formData = new FormData();
//     formData.append('file', this.adhaarFile);

//     this.http.post('your-upload-api-endpoint', formData).subscribe(
//       (response) => {
//         // Handle successful file upload response
//       },
//       (error) => {
//         // Handle error
//       }
//     );
//   }
// }

}
