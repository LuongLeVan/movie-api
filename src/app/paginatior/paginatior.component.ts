import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginatior.component.html',
  styleUrls: ['./paginatior.component.css']
})
export class PaginatorComponent {
  @Input() totalItems: number = 1;
  @Input() pageSize: number = 1;
  @Input() pageSizeOptions: number[] = [];

  @Output() pageChanged = new EventEmitter();

  onPageChanged(event:any) {
    this.pageChanged.emit(event);
    console.log(event);
    
  }
  
}