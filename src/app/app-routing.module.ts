import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'most-popular',
    component: MostPopularComponent
  },
  {
    path: 'book-reviews',
    component: BookReviewsComponent
  },
  {
    path: 'top-stories',
    component: TopStoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
