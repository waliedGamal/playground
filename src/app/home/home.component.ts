import { MovieDataService } from './../moviedata.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _MovieDataService:MovieDataService) { }

  ngOnInit(): void {

    this.getTrendingTv()
    this.getTrendingMovies()
    
    $(".tv").click(()=>{
          $('#toggle-container').css("clipPath" , 'inset(0 0 0 50%)')
          $('#toggle-container').css("background-color" , '#f2aa4cff')
        })

        $(".movie").click(()=>{
          $('#toggle-container').css("clipPath" , 'inset(0 50% 0 0)')
          $('#toggle-container').css("background-color" , '#f2aa4cff')
        })
  }

  // <!=============================== Get movies ============================!>
  prefixPath:string=`https://image.tmdb.org/t/p/w500/`
  TrendingMovies:any[]=[];
  TrendingTv:any[]=[];
  movieId:any;

  getTrendingTv(){
    this._MovieDataService.getTrending(`tv`).subscribe((response)=>{
    this.TrendingTv = response.results.slice(0,10)
    })
  }

    getTrendingMovies(){
    this._MovieDataService.getTrending(`movie`).subscribe((response)=>{
      this.TrendingMovies = response.results.slice(0,10)
    })
  }

}





