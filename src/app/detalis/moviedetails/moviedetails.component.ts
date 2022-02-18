import { MovieDataService } from '../../moviedata.service';
import {  Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import SwiperCore , { SwiperOptions ,Navigation} from 'swiper';
import { MatDialog } from '@angular/material/dialog';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit  {

  constructor( private _ActivatedRoute:ActivatedRoute, private _MovieDataService:MovieDataService ,public dialog: MatDialog) { }

  @ViewChild ('playvideo')
  playvideo!:TemplateRef<any>
  id:any;
  Moviedetails:any
  movieVideo:any;
  imgPath:any;
  key:string=``;
  prefixPath:string=`https://image.tmdb.org/t/p/w500/`;
  originalPoster:string=`https://image.tmdb.org/t/p/original/`
  runtime:any
  hours:any
  minutes:any

  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe((params:Params)=>{
      this.id = params['id'];
      this._MovieDataService.getMovieDetalis('movie',this.id).subscribe((response)=>{
        this.Moviedetails = response;
        this.imgPath = this.Moviedetails.backdrop_path
      })
    });

  }

  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: true,

    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
  };

  config2: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }

  };

  openDialog(){
    this.dialog.open(this.playvideo);
  }

  getMovieDetalis(){
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MovieDataService.getMovieDetalis('movie',this.id).subscribe((response)=>{
    this.Moviedetails = response;
    this.runtime = this.Time(this.Moviedetails.runtime)
    this.imgPath = this.Moviedetails.backdrop_path
    })
  }

  Time(num:any) {
    this.hours = Math.floor(num / 60);
    this.minutes = num % 60;
    if (this.minutes + ''.length < 2) {
        this.minutes = '0' + this.minutes;
    }
    return this.hours + "h " + this.minutes +"min";
  }

  getvideos(key:any){
    this.key = key
    this.openDialog()
  }

}
