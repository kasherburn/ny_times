import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../services/api.service';
import { MatPaginator} from '@angular/material/paginator';
import{MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-books',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']

})
export class MostPopularComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['mostPopular'];
  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator:MatPaginator;
  searchKey: string;

  
  constructor(private mostPopularService : APIService){}

  ngOnInit() {
   
    
      this.mostPopularService.mostPopular.subscribe(
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