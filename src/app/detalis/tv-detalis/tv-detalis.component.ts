import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MovieDataService } from '../../moviedata.service';
import { ActivatedRoute ,Router, ActivationStart } from '@angular/router';
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
  similarId: any;

  constructor(private _ActivatedRoute:ActivatedRoute, private _MovieDataService:MovieDataService ,private Router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTvDetalis()
    this.getTvTrailer()

    this.Router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        this.similarId = event.snapshot.params['id']
        this._MovieDataService.getMovieDetalis('tv',this.similarId).subscribe((response)=>{
          this.TvDetalis = response;
          this.getTvImages()
        })
      }})

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
  movieImages:any;
  movieVideo:any;
  imgPath:any;
  key:string=``
  fullpath :any;
  prefixPath:string=`https://image.tmdb.org/t/p/w500/`;
  originalPoster:string=`https://image.tmdb.org/t/p/original/`
  widthauto:any="98%"
  heightauto:any="90%"
  recommends:any
  credits:any

  openDialog(){
    this.dialog.open(this.playvideo);
  }

  getTvDetalis()
  {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MovieDataService.getMovieDetalis('tv',this.id).subscribe((response)=>{
    this.TvDetalis = response;
    this.getTvImages()
    })
  }

  getTvImages(){
    this._MovieDataService.getTvImages(this.id).subscribe((response)=>{
    this.movieImages = response
    this.imgPath = this.movieImages.backdrops[0].file_path
    })
  }

  getvideos(key:any){
    this.key = key
    this.openDialog()
  }

  getTvTrailer(){
    this._MovieDataService.getTvTrailer(this.id).subscribe((response)=>{
    this.movieVideo = response;
    this.key=this.movieVideo.results[0].key
    })
  }


}
