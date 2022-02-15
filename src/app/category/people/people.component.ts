import { MovieDataService } from './../../moviedata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private MovieDataService:MovieDataService) { }

  peoples:any[]=[];
  prefixPath:string=`https://image.tmdb.org/t/p/w500/`
  ngOnInit(): void {
    this.getpeople()
  }

  getpeople(){
    this.MovieDataService.getpoeple().subscribe((res)=>{
      this.peoples = res.results
    })
  }


}
