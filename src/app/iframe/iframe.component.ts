import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-iframe',
  template: `
   <iframe width="1260" 
        height="615"  
        [src]="sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + idVideo)"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>`,
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {
  idVideo:any = '';
  id:number = 0

  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute, private MovieService:MovieService) {

  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(param => {
      let idPost = +param.getAll('id');
      this.id = idPost;

    })



    this.MovieService.getVideo(this.id).subscribe(res => {
      this.idVideo = res.results[0].key
      
    })
  }

}
