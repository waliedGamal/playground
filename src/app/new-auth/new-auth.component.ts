import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-auth',
  templateUrl: './new-auth.component.html',
  styleUrls: ['./new-auth.component.scss']
})
export class NewAuthComponent implements OnInit {

  constructor(private authService:AuthService , private route:Router) { }
  authForm = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.minLength(6)])
  })

  isLoginMode = true;
  isLoading = false;
  error= new BehaviorSubject('')
  user:string=''
  ngOnInit(): void {
  }


  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
    this.error.next('')
  }
  onSubmit(form: FormGroup){
    let email = form.value.email;
    let password = form.value.password;
    this.isLoading = true
    if(this.isLoginMode){ // ?if login mode true
      //*... show login
      if(form.valid){
        if(form.valid){
          this.authService.logIn(email,password).subscribe((resData)=>{
            if(resData.registered == true){
              localStorage.setItem('user',resData.idToken)
              this.authService.saveUserData()
              this.isLoading = false
              setTimeout(() => {
                this.route.navigate(['home'])
              }, 1500);
            }
          },errorRes =>{
            this.error.next(errorRes.error.error.message)
            this.isLoading = false
          })
        }      }
    }else{ //? login mode false
      // *... show signup
      this.isLoading = true
      if(form.valid){
        this.authService.SignUp(email,password).subscribe(()=>{
          this.isLoading = false
          this.isLoginMode = true
        },(errorRes: { error: { error: { message: string; }; }; }) =>{
          this.error.next(errorRes.error.error.message)
          this.isLoading = false
        })
      }
      form.reset()
    }
  }

}
