import { Component, ViewChild, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { MatPaginator} from '@angular/material/paginator';
import{MatTableDataSource, MatSort} from '@angular/material';






@Component({
  selector: 'app-books',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.css']

})



export class BookReviewsComponent {
  
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['books'];
  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator:MatPaginator;
  searchKey: string;

  constructor(private apiService : APIService){}

  

  ngOnInit() {
    this.apiService.books.subscribe(
      list => {
        let array = list.map(item =>{
          return {
            $key: item.key,
            ...item
          };
  });
  this.listData = new MatTableDataSource(array);
  this.listData.sort = this.sort;
  this.listData.paginator = this.paginator;
  });
  }
  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

}

