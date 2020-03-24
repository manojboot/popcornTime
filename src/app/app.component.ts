import { Component } from '@angular/core';
import { MovieServiceService } from './services/movie-service.service';
import { TvServiceService } from './services/tv-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PopCornTime';

  movies : any;
  public data =[];
  public show:boolean = false;
  public component : any ='DashboardComponent';
  constructor(private movieData : MovieServiceService,private tvData : TvServiceService){}

  ngOnInit(){}
    
  toggle() {

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.component = "Hide";
    else
      this.component = "Hide";
  }
}
