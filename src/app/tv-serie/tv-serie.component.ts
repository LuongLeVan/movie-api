import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-tv-serie',
  templateUrl: './tv-serie.component.html',
  styleUrls: ['./tv-serie.component.scss']
})
export class TvSerieComponent implements OnInit {

  tvList: any = [];
  types: string = 'tv';
  type: any = null;
  page: number = 1;
  year: any = null;
  listNumber: number[] = [1, 2, 3, 4, 5]


  constructor(private MovieService: MovieService) {

  }


  ngOnInit(): void {
    this.MovieService.getMovieList(this.types, this.type, this.page, this.page).subscribe(res => {
      this.tvList = res.results;
    })
  }

  getPage(page: number) {
    this.page = page;
    this.MovieService.getMovieList(this.types, this.type, this.page, this.page).subscribe(res => {
      this.tvList = res.results;
    })
  }
}
