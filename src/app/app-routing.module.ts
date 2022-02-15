
import { TvToggleComponent } from './tvToggle/tv-toggle.component';
import { MovieToggleComponent } from './movieToggle/movie-toggle.component';
import { NavGuard } from './nav.guard';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[

  {path:``,redirectTo:`home`,pathMatch:"full"},
  {path:`home`,canActivate:[NavGuard],component:HomeComponent,
    children:[
      {path:``,redirectTo:"movie",pathMatch:"full"},
      {path:`movie`,component:MovieToggleComponent},
      {path:`tv`,component:TvToggleComponent},
    ]},

  {path:`category`,
    loadChildren:()=>import('./category/category.module').then((m)=>m.CategoryModule)
  },
  
  {path:'detalis',
    loadChildren:()=>import('./detalis/detalis.module').then((m)=>m.DetalisModule)
  },

  {path:`signin`,component:SigninComponent},
  {path:`signup`,component:SignupComponent},
  {path:`**`,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
