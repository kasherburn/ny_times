import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import angular modules needed

@Injectable({
    providedIn: 'root'
}
)

//injected in to root so can be used throughout whole application

export class APIService {
  //everything must be contained within a class

    books;
    mostPopular;
    topStories;

    //variables to be used

      constructor(http: HttpClient){
        const pathBooks ='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=UV9MuWwAgYMz9jY6im2DGQNJCSN60usr';
        this.books = http.get<any>(pathBooks).pipe(map(data => data.results.books))

      
        const pathMostPopular ='https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=UV9MuWwAgYMz9jY6im2DGQNJCSN60usr';
        this.mostPopular = http.get<any>(pathMostPopular).pipe(map(data => data.results))
    
        const pathTopStories ='https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=UV9MuWwAgYMz9jY6im2DGQNJCSN60usr';
        this.topStories = http.get<any>(pathTopStories).pipe(map(data => data.results)
    )
      }
      //constructor will set a path to each api - then will set the variable defined above to that path - this will iterate through and display each result

}


