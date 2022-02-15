import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _AuthService:AuthService ,private _Router:Router ) { }

  ngOnInit(): void {
  }

  //<!=========== registerform ======== >//
  error:string=``
  loading:boolean=false;

  signupform:FormGroup = new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern("^[A-Z][a-zA-Z0-9]{8,16}$")]),
    age:new FormControl(null,[Validators.required,Validators.min(18),Validators.max(80)])
  })


  signup(signupform:FormGroup)
  {
    this.loading = true
      //cheak if it's valid !!
    if(signupform.valid)
    {
      this._AuthService.signup(signupform.value).subscribe((response)=>{
        if(response.message == `success`)
        {
          this.loading = false
          //navigate to sing in
          this._Router.navigate([`signin`])
        }
        else
        {
          this.error = response.errors.email.message;
          setTimeout(() => {
            this.loading = false
          }, 1000);
        }
        })
    }

  }

}
