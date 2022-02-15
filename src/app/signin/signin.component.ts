import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private _AuthService:AuthService ,private _Router:Router) { }

  ngOnInit(): void {
  }

  error:string=``
  userToken:string=``
  loading:boolean=false;
    signinform:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern("^[A-Z][a-zA-Z0-9]{8,16}$")])
  })



  singin(signinform:FormGroup)
  {
    this.loading = true
      //cheak if it's valid !!
    if(signinform.valid)
    {
      this._AuthService.singin(signinform.value).subscribe((response)=>{
        if (response.message == `success`){
          //save user data
          this.loading = false
          localStorage.setItem("userToken",response.token)
          this._AuthService.saveUserData()
          //navgite to Home
          this._Router.navigate([`home`])
        }
        else
        {
          this.error = response.message;
          setTimeout(() => {
            this.loading = false
          }, 1000);
        }
      })
    }

}
}
