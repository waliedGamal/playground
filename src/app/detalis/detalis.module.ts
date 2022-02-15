import { PeopledetalisComponent } from '../detalis/peopledetalis/peopledetalis.component';
import { TvDetalisComponent } from '../detalis/tv-detalis/tv-detalis.component';
import { MoviedetailsComponent } from '../detalis/moviedetails/moviedetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalisRoutingModule } from './detalis-routing.module';
import { YouTubePlayerModule } from "@angular/youtube-player";
import {MatTabsModule} from '@angular/material/tabs';
import { SwiperModule } from 'swiper/angular';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    PeopledetalisComponent,
    TvDetalisComponent,
    MoviedetailsComponent
  ],
  imports: [
    CommonModule,
    DetalisRoutingModule,
    YouTubePlayerModule,
    SwiperModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class DetalisModule { }
