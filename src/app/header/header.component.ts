import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bgStyle: string;
  bgStyle2: Array<string>;
  fade_in:string;
  bookFontWeight: string;
  popularFontWeight: string;
  latestFontWeight: string;
  bookColor: string;
  popularColor: string;
  latestColor: string;


  constructor() {
    this.bgStyle = 'new_york_busy.jpeg';
    this.bgStyle2 = ['new_york_busy.jpeg'];
    this.bookFontWeight = 'normal';
    this.popularFontWeight = 'normal';
    this.latestFontWeight = 'normal';

   }

  changeBackgroundImageHome(){
    

    this.fade_in === "fade_in" ? this.fade_in = "fade_in2" :this.fade_in = "fade_in";
      
  


    this.bgStyle = 'new_york_busy.jpeg';
    this.bgStyle2.push('new_york_busy.jpeg');
    this.bookFontWeight = 'normal';
    this.popularFontWeight = 'normal';
    this.latestFontWeight = 'normal';
    
    this.bookColor = 'white';
    this.popularColor = 'white';
    this.latestColor = 'white';
 
  }
  

  changeBackgroundImageBooks() {
  

    this.fade_in === "fade_in" ? this.fade_in = "fade_in2" :this.fade_in = "fade_in";
    this.bgStyle = 'books.jpeg';
    this.bgStyle2.push('books.jpeg');
    this.bookFontWeight = 'bold';
    this.popularFontWeight = 'normal';
    this.latestFontWeight = 'normal';

    this.bookColor = 'gold';
    this.popularColor = 'white';
    this.latestColor = 'white';
  
  }

  changeBackgroundImagePopular() {
    this.fade_in === "fade_in" ? this.fade_in = "fade_in2" :this.fade_in = "fade_in";
    this.bgStyle = 'popular.jpeg';
    this.bgStyle2.push('popular.jpeg');
    this.popularFontWeight =  'bold'
    this.bookFontWeight = 'normal';
    this.latestFontWeight = 'normal';

    this.popularColor = 'gold';
    this.bookColor = 'white';
    this.latestColor = 'white';
   
  }

  changeBackgroundImageStories() {
    this.fade_in === "fade_in" ? this.fade_in = "fade_in2" :this.fade_in = "fade_in";
    this.bgStyle = 'stories.jpg';
    this.bgStyle2.push('stories.jpg');
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
