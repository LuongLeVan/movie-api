import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trendingList:any = []
  page:number=  1;

  constructor(private MovieService: MovieService, private title: Title){

  }

  ngOnInit(): void {
    this.title.setTitle('Trending Page')
    this.MovieService.getTrending(this.page).subscribe(res => {
      this.trendingList = res.results;
      
    })
    
  }

  onChanged(){
    this.page = this.page + 1;
    console.log(this.page);
    
    this.MovieService.getTrending(this.page).subscribe(res => {
     this.MovieService.setListAfterChangePage(res.results)
      
      
      
      this.trendingList = res.results;
    })
    this.MovieService.setPageNumber(this.page)
  }

  onPageChanged(event:any) {
    console.log(event);
    
  }
}
