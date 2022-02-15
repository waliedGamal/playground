import { Router } from '@angular/router';
import { MovieDataService } from './../moviedata.service';
  import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _MovieDataService:MovieDataService) { }

  islogin:boolean=false
  results:any
  prefixPath:string=`https://image.tmdb.org/t/p/w500/`;
  title:string=``
  name:string=``
  Route:string=``
  username:any

  ngOnInit(): void {

    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue() != null){
        this.islogin = true
        this.username = this._AuthService.userData.getValue()
      }
      else{
        this.islogin = false
      }
    })

  }

  searchMedia:FormGroup = new FormGroup({
    keyword: new FormControl(null)
  })

  SearchMovie(searchMedia:FormGroup){
    this._MovieDataService.SearchMovie(searchMedia.value.keyword).subscribe((response)=>{
      this.results = response.results
    })
  }

  logout(){
    this._AuthService.logout()
  }
}
