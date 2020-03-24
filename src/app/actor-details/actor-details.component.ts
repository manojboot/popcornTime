import { Component, OnInit } from '@angular/core';
import { ActorDetailsService } from '../actor-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  movies : any;
  public data =[];

  constructor(private movieDetail : ActorDetailsService,private route: ActivatedRoute){}

  ngOnInit() {

    console.log('id');
    this.route.paramMap.subscribe(params => {
      
      this.movieDetail.showActorDetails(params.get('id')).subscribe(c =>{
       console.log(c);
       this.movies = c;
       console.log(this.movies);
       })   
       });
  }

}
