import { Component, OnInit } from '@angular/core';
import { TvServiceService } from '../services/tv-service.service';


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  title = 'Tv Shows Portal';
  movies : any;
  public data =[];
  constructor(private movieData : TvServiceService){}

  ngOnInit(){
    this.movieData.showMTvShows()
                              .subscribe(data =>{
                                this.movies = data;
                                console.log(data);
                              })
  }
}
