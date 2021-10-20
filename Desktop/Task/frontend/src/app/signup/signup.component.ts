import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private authService: AuthService) { 
    
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(2)]),
      email: new FormControl("",[Validators.required, Validators.email]),
      username: new FormControl("",[Validators.required, Validators.minLength(2)]),
      password: new FormControl("",[Validators.required, Validators.minLength(7)]),
      contact: new FormControl("",[Validators.required, Validators.minLength(10)]),
    })
  }

  signup(): void {
    console.log(this.signupForm.value)
    

    


  this.authService
     .signup(this.signupForm.value)
     .subscribe((msg) => console.log(msg));
  }

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
    
  }

}
