import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bgStyle: string;
  fontWeight: string;

  constructor() {
    this.bgStyle = 'new_york_busy.jpeg';
   }

  changeBackgroundImageHome(){
    this.bgStyle = 'new_york_busy.jpeg'
  }
  

  changeBackgroundImageBooks() {
    this.bgStyle = 'books.jpeg';
    this.fontWeight = 'bold';
  }

  changeBackgroundImagePopular() {
    this.bgStyle = 'popular.jpeg';
  }

  changeBackgroundImageStories() {
    this.bgStyle = 'stories.jpg';
  }

  ngOnInit() {
    
  }

}
