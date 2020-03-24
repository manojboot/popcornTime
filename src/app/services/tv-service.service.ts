import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvServiceService {

  constructor(private http:HttpClient) { }

  showMTvShows(){
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=fdd6877fee69061a539a67340938bec9&language=en-US&page=1`);
  }
}
