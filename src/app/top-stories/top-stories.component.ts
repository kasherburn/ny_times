import { Component, OnInit, ViewChild } from '@angular/core';
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

 


}