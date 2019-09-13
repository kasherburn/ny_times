import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import { MostPopularComponent } from './most-popular/most-popular.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopStoriesComponent,
    BookReviewsComponent,
    MostPopularComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
