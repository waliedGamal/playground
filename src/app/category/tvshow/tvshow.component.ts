import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../moviedata.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {

  constructor(private _MovieDataService:MovieDataService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.getTrendingTV()
    this.primengConfig.ripple = true;
  }

  prefixPath:string=`https://image.tmdb.org/t/p/w500/`
  TrendingTv:any[]=[];
  movieId:any;

  getTrendingTV()
  {
    this._MovieDataService.getTrending(`tv`).subscribe((response)=>{
      this.TrendingTv = response.results
    })
  }

  getpage(page:any){
    if(page == 0){
      this._MovieDataService.getpage('tv',1).subscribe((res)=>{
        this.TrendingTv = res.results
      })
    }else{
      this._MovieDataService.getpage('tv',page+1).subscribe((res)=>{
        this.TrendingTv = res.results
      })
    }

  }
}
