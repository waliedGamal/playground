import { MovieDataService } from './../moviedata.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import SwiperCore , { SwiperOptions ,Navigation} from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-headerslider',
  templateUrl: './headerslider.component.html',
  styleUrls: ['./headerslider.component.scss']
})
export class HeadersliderComponent implements OnInit {

  constructor( private _MovieDataService:MovieDataService) { }

  ngOnInit(): void {
    this.getTrendingMovies()
  }

  config: SwiperOptions = {
    slidesPerView: 8,
    spaceBetween: 50,
    navigation: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      740: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 0
      },
    }

  };

  prefixPath:string=`https://image.tmdb.org/t/p/w500/`
  originalPoster:string=`https://image.tmdb.org/t/p/original/`
  TrendingMovies:any[]=[];
  moviePoster:any;
  movieId:string=``
  imgPath:any;

  getTrendingMovies(){
    this._MovieDataService.getTrending(`movie`).subscribe((response)=>{
      this.TrendingMovies = response.results.slice(0,10)
      $(".slider-background").css("background-image",`url(${this.originalPoster + response.results[0].poster_path})`)
    })
  }

  moviebg(poster:any){
      this.movieId = poster
      this._MovieDataService.getImages('movie',this.movieId).subscribe((response)=>{
      this.moviePoster =response;
      this.imgPath = this.moviePoster.backdrops[0].file_path
      $(".slider-background").css("background-image",`url( ${this.originalPoster + this.imgPath})`);
    })
  }

}
