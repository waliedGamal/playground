import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from './../../moviedata.service';
import { Component, OnInit } from '@angular/core';
import SwiperCore , { SwiperOptions ,Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-peopledetalis',
  templateUrl: './peopledetalis.component.html',
  styleUrls: ['./peopledetalis.component.scss']
})
export class PeopledetalisComponent implements OnInit {

  constructor(private MovieDataService:MovieDataService,private ActivatedRoute:ActivatedRoute) { }
  id:string=``;
  peopledeatlis:any;
  prefixPath:string=`https://image.tmdb.org/t/p/w500/`;

  config: SwiperOptions = {
    slidesPerView: 5,
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

  ngOnInit(): void {
    this.getpeopledetalis()
  }

  getpeopledetalis(){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.MovieDataService.getpoepledetalis(this.id).subscribe((res)=>{
      this.peopledeatlis = res
    })
  }



}
