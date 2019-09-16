import { Component, OnInit } from '@angular/core';



import { APIService } from '../services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']

})
export class MostPopularComponent implements OnInit {

  mostPopular;
  constructor(private mostPopularService : APIService){
  }

  ngOnInit() {
    this.mostPopular = this.mostPopularService.mostPopular
  }

}