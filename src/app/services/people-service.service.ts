import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  constructor(private http:HttpClient) { }

  showActors(){
    return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=fdd6877fee69061a539a67340938bec9&language=en-US`);
  }
}
