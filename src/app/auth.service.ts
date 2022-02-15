import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router ) {

    if(localStorage.getItem("userToken") !=null)
    {
      this.saveUserData();
    }
  }

  userData = new BehaviorSubject(null);
  saveUserData()
  {
    let encodedUserData = JSON.stringify(localStorage.getItem("userToken"));
    this.userData.next(jwtDecode(encodedUserData));
  }

  signup(data:object):Observable<any>
  {
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signup`,data)
  }

  singin(data:object):Observable<any>
  {
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signin`,data)
  }

  logout()
  {
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this._Router.navigate([`signin`]);
  }
}
