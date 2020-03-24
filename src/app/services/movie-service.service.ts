import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }
  page:number = 1;
  showMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=fdd6877fee69061a539a67340938bec9&language=en-US&page=page=${page}");
  }


  showMoviesOnTheater(){
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=fdd6877fee69061a539a67340938bec9&language=en-US&page=${page}");
  }

  // showTvShows(){
  //   return this.http.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=fdd6877fee69061a539a67340938bec9&language=en-US&page=1`);
  // }

   
}
