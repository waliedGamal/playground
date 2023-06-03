
import { TvToggleComponent } from './tvToggle/tv-toggle.component';
import { MovieToggleComponent } from './movieToggle/movie-toggle.component';
import { NavGuard } from './Gurds/nav.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAuthComponent } from './new-auth/new-auth.component';
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

  {path:`auth`,component:NewAuthComponent},
  {path:`**`,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
