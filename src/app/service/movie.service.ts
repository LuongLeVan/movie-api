import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  page:any = '';
  ListBySearch:any = [];
  movieList:any  = [];
  list:any = []
  constructor(private http: HttpClient) { }
  
    
  getTrending(page:any): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=6de13cb06459580e8f7ab054d9dbb28e&page=${page}`)
  }

  getVideo(path:number): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${path}/videos?api_key=6de13cb06459580e8f7ab054d9dbb28e`)
  }

  getMovieBySearch(type:string,searchText:string, page:number): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/search/${type}?api_key=6de13cb06459580e8f7ab054d9dbb28e&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
  }
  setPageNumber(pageNumber:number):any{
    this.page =  pageNumber;

  }
  

  getPageNumber(){
    return this.page
  }

  setListAfterChangePage(list:any){
    this.movieList = list
  }


  getListAfterChangePage(){
    return this.movieList;
  }

  setListMovieBySearch(list:any):Observable<any>{
    return this.ListBySearch = list;
  }

  getListMovieBySearch(){
    return this.ListBySearch
  }

  
  getActor(type:any, id:any): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=6de13cb06459580e8f7ab054d9dbb28e`)
  }

  getMovieList(types:any, type:any, page:any, year:any): Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/${types}?api_key=6de13cb06459580e8f7ab054d9dbb28e&with_genres=${type}&page=${page}&primary_release_year=${year}`)
  }

}
