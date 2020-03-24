import { Component, OnInit } from '@angular/core';
import { PeopleServiceService } from '../services/people-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  title = 'Movie Portal';
  movies : any;
  public data =[];
  constructor(private actorData : PeopleServiceService){}

  ngOnInit(){
    this.actorData.showActors()
                              .subscribe(data =>{
                                this.movies = data;
                                console.log(data);
                              })
  }
}
