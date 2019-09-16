import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']

})
export class TopStoriesComponent implements OnInit {

  topStories;
  constructor(private topStoriesService : APIService){
  }

  ngOnInit() {
    this.topStories = this.topStoriesService.topStories
  }

}