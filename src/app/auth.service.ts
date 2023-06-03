import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { AuthData } from '../app/authData'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router ) {

    if(localStorage.getItem("user") !=null)
    {
      this.saveUserData();
    }
  }
  FirebaseKey='AIzaSyDOuPuLJckbvsCGuHLIyXldSMhkT9AzDH8'

  userData = new BehaviorSubject(null);
  saveUserData(){
    let encodedUserData = JSON.stringify(localStorage.getItem("user"));
    this.userData.next(jwtDecode(encodedUserData));
  }

  SignUp(email:string , password:string){
    return this._HttpClient.post<AuthData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.FirebaseKey}`,{
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
  logIn(email:string , password:string){
    return this._HttpClient.post<AuthData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.FirebaseKey}`,{
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

  logout()
  {
    localStorage.removeItem("user");
    this.userData.next(null);
    this._Router.navigate([`auth`]);
  }
}
