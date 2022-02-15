import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  declarations: [
    MoviesComponent,
    TvshowComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    PaginatorModule
  ]
})
export class CategoryModule { }
