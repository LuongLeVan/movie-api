import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit{
  trendingList:any = [];
  itemList:any = ''
  constructor(){
    this.itemList =  localStorage.getItem('movieList')
  this.trendingList = JSON.parse(this.itemList)
    
  }

  ngOnInit(){

  }

}
