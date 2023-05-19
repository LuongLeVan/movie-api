import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieList: any  = [];
  type:string = 'movie';
  gerne:any = null;
  page:number = 1;
  year:any = null;
  listNumber:number[] = [1,2,3,4,5]
    constructor(private MovieService: MovieService){

    }

    ngOnInit () : void {
      this.MovieService.getMovieList(this.type, this.gerne, this.page, this.year).subscribe(res => {
        this.movieList = res.results;
        console.log(this.movieList);
        
      })
    }

    getPage(page:number){
      this.page = page;
      this.MovieService.getMovieList(this.type, this.gerne, this.page, this.year).subscribe(res => {
        this.movieList = res.results;
        console.log(this.movieList);
        
      })      
    }
}
