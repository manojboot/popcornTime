import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvshowsDetailComponent } from './tvshows-detail/tvshows-detail.component';
import { MovieServiceService } from './services/movie-service.service';
import { MovieDetailService } from './services/movie-detail.service';
import { PeopleServiceService } from './services/people-service.service';
import { MatGridListModule } from '@angular/material/grid-list';

import { PeopleComponent } from './people/people.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvshowsComponent,
    MovieDetailComponent,
    TvshowsDetailComponent,
    PeopleComponent,
    DashboardComponent,
    ActorDetailsComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,MatGridListModule
  ],
  providers: [MovieDetailService,MovieServiceService,PeopleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
