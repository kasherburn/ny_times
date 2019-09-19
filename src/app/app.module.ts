import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
// import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    TopStoriesComponent,
    BookReviewsComponent,
    MostPopularComponent,
    HeaderComponent,
    FooterComponent,
    
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    // MatTableDataSource,
    // MatTable,
    MatTableModule,
    MatSortModule
    
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
