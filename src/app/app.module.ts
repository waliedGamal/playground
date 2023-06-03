import { MovieToggleComponent } from './movieToggle/movie-toggle.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersliderComponent } from './headerslider/headerslider.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { TvToggleComponent } from './tvToggle/tv-toggle.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NewAuthComponent } from './new-auth/new-auth.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    HeadersliderComponent,
    TvToggleComponent,
    MovieToggleComponent,
    FooterComponent,
    NewAuthComponent,
    LoadingSpinnerComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    YouTubePlayerModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    SwiperModule,
    MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
