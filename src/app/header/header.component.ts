import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  clickMessage = '';

  changeBackgroundImage() {
    this.clickMessage = "Working";
  }
  ngOnInit() {
  }

}
