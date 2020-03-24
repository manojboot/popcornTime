import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { TvshowsDetailComponent } from './tvshows-detail/tvshows-detail.component';
import { PeopleComponent } from './people/people.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';


const routes: Routes = [
    {path: 'movies',component : MoviesComponent},
    {path: 'tvShows', component : TvshowsComponent },
    {path: 'actors', component : PeopleComponent },
    {path: 'dashboard', component : DashboardComponent },
    {path: 'movies/:id',component : MovieDetailComponent},
    {path: 'tvShows/:id', component : TvshowsDetailComponent },
    {path: 'actors/:id', component : ActorDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
