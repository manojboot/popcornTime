import { Component, OnInit } from '@angular/core';
import { TvshowsDetailService } from '../services/tvshows-detail.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tvshows-detail',
  templateUrl: './tvshows-detail.component.html',
  styleUrls: ['./tvshows-detail.component.css']
})
export class TvshowsDetailComponent implements OnInit {

  movies : any;
  public data =[];

  constructor(private movieDetail : TvshowsDetailService,private route: ActivatedRoute){}

  ngOnInit() {

    console.log('id');
    this.route.paramMap.subscribe(params => {
      
      this.movieDetail.showTvShowsDetails(params.get('id')).subscribe(c =>{
       console.log(c);
       this.movies = c;
       console.log(this.movies);
       })   
       });
  }

}
