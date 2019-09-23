import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { APIService } from '../services/api.service';
import { MatPaginator} from '@angular/material/paginator';
import{MatTableDataSource, MatSort} from '@angular/material';






@Component({
  selector: 'app-books',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.css']

})



export class BookReviewsComponent implements OnInit{
  
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['books'];
  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator:MatPaginator;
  searchKey: string;


 


  constructor(private apiService : APIService){}

  

  ngOnInit() {
    this.apiService.books.subscribe(
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

  //when we click next on our pagination arrow the code below will scroll back to top of component page

  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')


  //this method checks where you are on the page against the document body and is used to compare how far is needed to scroll when the scrollToTop method is run
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // scroll up on window to the top of the component page 
  gotoTop() {
    window.scroll({ 
      top: 954, 
      left: 0, 
      behavior: 'smooth',
    });
  }


  
 
}

