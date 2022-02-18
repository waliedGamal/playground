import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MovieDataService } from '../../moviedata.service';
import { ActivatedRoute, Params } from '@angular/router';
import SwiperCore , { SwiperOptions ,Navigation, Pagination } from 'swiper';
import { MatDialog } from '@angular/material/dialog';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-tv-detalis',
  templateUrl: './tv-detalis.component.html',
  styleUrls: ['./tv-detalis.component.scss']
})
export class TvDetalisComponent implements OnInit {
  @ViewChild ('playvideo')
  playvideo!:TemplateRef<any>

  constructor(private _ActivatedRoute:ActivatedRoute, private _MovieDataService:MovieDataService ,public dialog: MatDialog) { }

  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe((params:Params)=>{
      this.id = params['id'];
      this._MovieDataService.getMovieDetalis('tv',this.id).subscribe((response)=>{
        this.TvDetalis = response;
        this.imgPath = this.TvDetalis.backdrop_path
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

  id:string=``;
  TvDetalis:any={};
  movieVideo:any;
  imgPath:any;
  key:string=``
  prefixPath:string=`https://image.tmdb.org/t/p/w500/`;
  originalPoster:string=`https://image.tmdb.org/t/p/original/`

  getTvDetalis(){
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MovieDataService.getMovieDetalis('tv',this.id).subscribe((response)=>{
    this.TvDetalis = response;
    this.imgPath = this.TvDetalis.backdrop_path
    })
  }

  getvideos(key:any){
    this.key = key
    this.openDialog()
  }

  

  openDialog(){
    this.dialog.open(this.playvideo);
  }


}
