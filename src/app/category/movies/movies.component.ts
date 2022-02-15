import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../moviedata.service';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _MovieDataService:MovieDataService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.getTrendingMovies()
    this.primengConfig.ripple = true;
  }

  prefixPath:string=`https://image.tmdb.org/t/p/w500/`
  TrendingMovies:any[]=[];
  getTrendingMovies()
  {
    this._MovieDataService.getTrending(`movie`).subscribe((response)=>{
      this.TrendingMovies = response.results
    })
  }

  getpage(page:any){
    if(page == 0){
      this._MovieDataService.getpage('movie',1).subscribe((res)=>{
        this.TrendingMovies = res.results
      })
    }else{
      this._MovieDataService.getpage('movie',page+1).subscribe((res)=>{
        this.TrendingMovies = res.results
      })
    }

  }

}
