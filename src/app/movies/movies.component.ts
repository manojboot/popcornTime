import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = 'Movie Portal';
  movies : any;
  public data =[];
  constructor(private movieService : MovieServiceService){}
  page: number = 1; 
  ngOnInit(){

      this.movieData();  
  }
    movieData(){
      this.movieService.showMovies().subscribe(data =>{
                                this.movies = data;
                                console.log(data);
                              })
  }
    // When scroll down the screen  
    onScroll()  
    {  
      console.log("Scrolled");  
      this.page = this.page + 1;  
      this.movieData();
    }  

}
