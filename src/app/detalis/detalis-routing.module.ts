import { PeopledetalisComponent } from '../detalis/peopledetalis/peopledetalis.component';
import { TvDetalisComponent } from '../detalis/tv-detalis/tv-detalis.component';
import { MoviedetailsComponent } from '../detalis/moviedetails/moviedetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavGuard } from '../nav.guard';

const routes: Routes = [
  {path:`movie-detalis/:id`,canActivate:[NavGuard],component:MoviedetailsComponent},
  {path:`tv-detalis/:id`,canActivate:[NavGuard],component:TvDetalisComponent},
  {path:`person-detalis/:id`,canActivate:[NavGuard],component:PeopledetalisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalisRoutingModule { }
