import { MovieDataService } from './../moviedata.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tv-toggle',
  templateUrl: './tv-toggle.component.html',
  styleUrls: ['./tv-toggle.component.scss']
})
export class TvToggleComponent implements OnInit {

  constructor(private _MovieDataService:MovieDataService ,public dialog: MatDialog) { }

  @ViewChild ('playvideo')
  playvideo!:TemplateRef<any>

  ngOnInit(): void {
    this.getTrendingTv()
  }

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

  getTrendingTv(){
    this._MovieDataService.getTrending(`tv`).subscribe((response)=>{
      this.TrendingTv = response.results.slice(0,5)
      $(".slider-background2").css("background-image",`url( ${this.originalPoster + this.TrendingTv[0].backdrop_path })`);
    })
  }

  openDialog(){
    this.dialog.open(this.playvideo);
  }

  getTrailer(id:any){
    this._MovieDataService.getTrailer('tv',id).subscribe((response)=>{
      this.tralier = response
      this.key = this.tralier.results[0].key
      this.openDialog()
    })
  }


  moviebg(poster:any){
      this.movieposter = poster
      this._MovieDataService.getImages('tv', this.movieposter).subscribe((response)=>{
      this.moviePoster =response;
      this.imgPath = this.moviePoster.backdrops[0].file_path
      $(".slider-background2").css("background-image",`url( ${this.originalPoster + this.imgPath})`);
    })
  }

}
