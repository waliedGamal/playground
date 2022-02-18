import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MovieDataService } from './../moviedata.service';
import * as $ from 'jquery';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-toggle',
  templateUrl: './movie-toggle.component.html',
  styleUrls: ['./movie-toggle.component.scss']
})
export class MovieToggleComponent implements OnInit {

  constructor(private _MovieDataService:MovieDataService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getTrendingMovies()
  }
  @ViewChild ('playvideo')
  playvideo!:TemplateRef<any>

  prefixPath:string=`https://image.tmdb.org/t/p/w500/`
  originalPoster:string=`https://image.tmdb.org/t/p/original/`
  TrendingMovies:any[]=[];
  TrendingTv:any[]=[];
  movieposter:any;
  key:any;
  widthauto:any="98%";
  heightauto:any="90%";
  tralier:any;
  moviePoster:any;
  imgPath:any;


  openDialog(){
    this.dialog.open(this.playvideo);
  }

  getTrendingMovies()
  {
    this._MovieDataService.getTrending(`movie`).subscribe((response)=>{
      this.TrendingMovies = response.results.slice(0,5)
      $(".slider-background2").css("background-image",`url( ${this.originalPoster + this.TrendingMovies[0].backdrop_path })`);
    })
  }

  getTrailer(id:any){
  this._MovieDataService.getTrailer('movie',id).subscribe((response)=>{
    this.tralier = response
    this.key = this.tralier.results[0].key
    this.openDialog()
  })
}

moviebg(poster:any)
  {
      this.movieposter = poster
      this._MovieDataService.getImages('movie',this.movieposter).subscribe((response)=>{
      this.moviePoster =response;
      this.imgPath = this.moviePoster?.backdrops[0].file_path
      $(".slider-background2").css("background-image",`url( ${this.originalPoster + this.imgPath})`);
    })
  }


}
