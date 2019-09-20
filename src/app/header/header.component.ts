import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bgStyle: string;
<<<<<<< HEAD
  fontWeight: string;
=======
  bookFontWeight: string;
  popularFontWeight: string;
  latestFontWeight: string;

  bookColor: string;
  popularColor: string;
  latestColor: string;
>>>>>>> f51fa8cf82b3a35a5a2eca57e0855f4527df7305

  constructor() {
    this.bgStyle = 'new_york_busy.jpeg';
    this.bookFontWeight = 'normal';
    this.popularFontWeight = 'normal';
    this.latestFontWeight = 'normal';

   }

  changeBackgroundImageHome(){
    this.bgStyle = 'new_york_busy.jpeg'
    this.bookFontWeight = 'normal';
    this.popularFontWeight = 'normal';
    this.latestFontWeight = 'normal';

    this.bookColor = 'white';
    this.popularColor = 'white';
    this.latestColor = 'white';
  }
  

  changeBackgroundImageBooks() {
    this.bgStyle = 'books.jpeg';
<<<<<<< HEAD
    this.fontWeight = 'bold';
=======
    this.bookFontWeight = 'bold';
    this.popularFontWeight = 'normal';
    this.latestFontWeight = 'normal';

    this.bookColor = 'gold';
    this.popularColor = 'white';
    this.latestColor = 'white';
>>>>>>> f51fa8cf82b3a35a5a2eca57e0855f4527df7305
  }

  changeBackgroundImagePopular() {
    this.bgStyle = 'popular.jpeg';
    this.popularFontWeight =  'bold'
    this.bookFontWeight = 'normal';
    this.latestFontWeight = 'normal';

    this.popularColor = 'gold';
    this.bookColor = 'white';
    this.latestColor = 'white';
  }

  changeBackgroundImageStories() {
    this.bgStyle = 'stories.jpg';
    this.latestFontWeight =  'bold'
    this.bookFontWeight = 'normal';
    this.popularFontWeight = 'normal';

    this.latestColor = 'gold';
    this.popularColor = 'white';
    this.bookColor = 'white';
  }

  ngOnInit() {
    
  }

}
