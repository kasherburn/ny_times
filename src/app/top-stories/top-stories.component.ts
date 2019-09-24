import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { APIService } from '../services/api.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-books',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']

})
export class TopStoriesComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['topStories'];
  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator:MatPaginator;
  searchKey: string;

  
  constructor(private topStoriesService : APIService){
  }

 
  ngOnInit() {
    this.topStoriesService.topStories.subscribe(
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

 
  isShow: boolean;
  topPosToStartShowing = 100;
  

  @HostListener('window:scroll')
  checkScroll() {
      

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    console.log(document.body.scrollHeight / 4.2);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // scroll up on window to the top of the component page 
  gotoTop() {
    window.scroll({ 
      top: document.body.scrollHeight / 4.2,
      left: 0, 
      behavior: 'smooth',
    });
  }



}