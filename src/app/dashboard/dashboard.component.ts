import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { TvServiceService } from '../services/tv-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies : any;
  public data =[];
  constructor(private movieData : MovieServiceService,private tvData : TvServiceService){}

  ngOnInit(){
    this.movieData.showMovies()
                              .subscribe(data =>{
                                this.movies = data;
                                console.log(data);
                              })
                            }

}
