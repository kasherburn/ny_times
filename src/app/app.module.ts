import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopStoriesComponent,
    BookReviewsComponent,
    MostPopularComponent,
    NgbModule,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
