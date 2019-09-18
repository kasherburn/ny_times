import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';



@Component({
  selector: 'app-books',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.css']

})
export class BookReviewsComponent implements OnInit {

  books; 
  // dataSource;
  // @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private apiService : APIService){
  }

  // @ViewChild(MatSort) sort: MatSort;
  

  ngOnInit() {
    this.books = this.apiService.books //our books array is equal to the api array
  }



}
