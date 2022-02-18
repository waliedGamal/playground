import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  TrendingMovies: any;
  trendingIds:any[]=[];
  movieVideo:any;
  baseUrl:string=`https://api.themoviedb.org/3/`;
  apikey:string=`13e3cda7786b7e0b9e825c933ba87591`
  constructor( private _HttpClient:HttpClient) {}

  getTrending(type:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}trending/${type}/day?api_key=${this.apikey}`)
  }

   //<!=========================================== People ===========================================>
  getpoeple():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}person/popular?api_key=${this.apikey}&language=en-US`)
  }
  getpoepledetalis(id:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}person/${id}?api_key=${this.apikey}&language=en-US&append_to_response=movie_credits,tv_credits,images`)
  }

      //<!=========================================== Get Trailers ===========================================>
  getTrailer(type:string ,id:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/${type}/${id}/videos?api_key=${this.apikey}&language=en-US`)
  }

    //<!=========================================== Get Detalis ==================================================>
  getMovieDetalis(type:any,id:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}${type}/${id}?api_key=${this.apikey}&language=en-US&append_to_response=credits,videos,similar,images&include_image_language=en,null`)
  }

  //<!=========================================== Get BackGround Images ===========================================>
  getImages(type:string,id:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/${type}/${id}/images?api_key=${this.apikey}`)
  }
  //<!=========================================== Search ===========================================>
  SearchMovie(keyword:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}search/multi?api_key=${this.apikey}&language=en-US&query=${keyword}&page=1&include_adult=false`)
  }

  getpage(type:string,page:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}${type}/popular?api_key=${this.apikey}&language=en-US&page=${page}`)
  }
}
