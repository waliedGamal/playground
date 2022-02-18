import { PeopleComponent } from './people/people.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavGuard } from '../Gurds/nav.guard';

const routes: Routes = [
  {path:``,component:MoviesComponent},
  {path:`Movies`,canActivate:[NavGuard],component:MoviesComponent},
  {path:`TvShow`,canActivate:[NavGuard],component:TvshowComponent},
  {path:`people`,canActivate:[NavGuard],component:PeopleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
