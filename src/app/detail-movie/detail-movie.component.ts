import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { DomSanitizer, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  detailMovie: any = '';
  id: number = 0;
  idVideo:any = '';
  similarList:any[] = []
  randomPage:number = Math.floor(Math.random() * 20) + 1
  url:any = '';
  favoriteList:any= [];  
  favoriteMovies:any = [];
  pageNumber:any;
  movieSearch:any = {};
  actorList:any = [];
  typeFilm:string = '';
  isClick:boolean = false;
  movieListChange:any =  [];
  movieDescription:any;
 

  constructor(private MovieService: MovieService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private title:Title) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.idVideo)
  }
  
  
  ngOnInit(): void {
    this.movieListChange = this.MovieService.getListAfterChangePage()
    console.log(this.movieListChange);
    
    
    //get page number
    this.pageNumber = this.MovieService.getPageNumber()
   
    
    
    
    
    
    

    this.route.paramMap
      .subscribe(param => {
        let idPost = +param.getAll('id');
        this.id = idPost;
        
      })

      
      
      //getListFromFilter
      let resultFromFilter  = this.MovieService.getListMovieBySearch()
      this.movieSearch = resultFromFilter.filter((movie:any) => movie.id === this.id)[0]
        
      
      this.MovieService.getTrending(1).subscribe(res => {
        this.detailMovie = res.results.filter((movie: any) => movie.id === this.id);
        this.detailMovie = this.detailMovie[0]
        this.typeFilm = this.detailMovie.media_type
        this.title.setTitle(`${this.detailMovie.title || this.detailMovie.name} -  (${this.detailMovie.release_date.slice(0,4) || this.detailMovie.first_air_date.slice(0,4)})`)


      
        

        if(this.typeFilm =='tv'){
          this.MovieService.getActor('tv', this.id).subscribe(res => {
            this.actorList = res.cast;
            console.log(this.actorList);
            
          
            
          })
        }


        if(this.typeFilm == 'movie'){
          this.MovieService.getActor('movie', this.id).subscribe(res => {
            this.actorList = res.cast;
            
          
            
          })
    
        }

      
        
      
    })

    
    this.MovieService.getVideo(this.id).subscribe(res => {
      this.idVideo = res.results[1].key
      this.url = `https://www.youtube.com/embed/${this.idVideo}`
      
      
    })

    //Get list similar 
    this.MovieService.getTrending(this.randomPage).subscribe(res => {
      this.similarList = res.results;
      
    })
    
   
    

  }


/* Handle Favorite */
handleFavorite(movie: any, movieId: any) {
  this.isClick = !this.isClick;
  let results: any = localStorage.getItem('movieList');
  let favorites: any[] = results ? JSON.parse(results) : [];
  
  // Kiểm tra xem phim đã có trong danh sách yêu thích hay chưa
  if (!favorites.some(favorite => favorite.id === movieId)) {
    // Thêm phim vào danh sách yêu thích
    favorites.push(movie);
    localStorage.setItem('movieList', JSON.stringify(favorites));
  }
}




}
