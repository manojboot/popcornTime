import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../services/movie-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movies : any;
  public data =[];

  constructor(private movieDetail : MovieDetailService,private route: ActivatedRoute){}

  ngOnInit() {

    console.log('id');
    this.route.paramMap.subscribe(params => {
      
      this.movieDetail.showMovieDetails(params.get('id')).subscribe(c =>{
       console.log(c);
       this.movies = c;
       console.log(this.movies);
       })   
       });
  }
}
