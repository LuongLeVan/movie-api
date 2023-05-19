import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  movieBySearch:any = '';
  searchText:any = '';
  type:string = 'movie';
  page:number= 1;
  listNumber:any = [1,2,3,4,5]
  isDark:boolean = false;
  constructor(private MovieService:MovieService, private title:Title){
    
  }
  
  ngOnInit(): void {
      this.title.setTitle('Search Page')
  }
  handleSearch(searchText:string){
    this.MovieService.getMovieBySearch(this.type,searchText, this.page).subscribe(res => {
        this.movieBySearch = res.results
        this.MovieService.setListMovieBySearch(this.movieBySearch)
        
    })

  }

  //Found Movie Type MOvie
  changeTypeMovie(){
    this.type = 'movie';
    this.MovieService.getMovieBySearch(this.type,this.searchText, this.page).subscribe(res => {
      this.movieBySearch = res.results      
  })
  }

  //Found Movie type TV
  changeTypeTV(){
    this.type = 'tv';
    this.MovieService.getMovieBySearch(this.type,this.searchText, this.page).subscribe(res => {
      this.movieBySearch = res.results      
  })
  }

  getPage(pageNum:number){
    this.page = pageNum;
    this.MovieService.getMovieBySearch(this.type,this.searchText, this.page).subscribe(res => {
      this.movieBySearch = res.results      
  })
  }

  darkMode(){
    this.isDark = !this.isDark;
  }


}
