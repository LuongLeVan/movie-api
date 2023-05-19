import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() image:string = '';
  @Input() title:string = '';
  @Input() year:string ='2022';
  @Input() mark:any = '';
  imageLink : string = "";

  ngOnInit(){
      this.imageLink = this.image ? `https://image.tmdb.org/t/p/w300/${this.image}` : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }
  
}
