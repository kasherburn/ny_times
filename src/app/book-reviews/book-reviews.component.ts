import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.css']

})
export class BookReviewsComponent implements OnInit {




  books;
  constructor(private apiService : APIService){
  }

  ngOnInit() {

    

    this.books = this.apiService.books
  }

}
