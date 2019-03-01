import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroes/:id', component: HeroDetailComponent},
    {path: 'dashboard', component: DashboardComponent},
    // This route redirects a URL that fully matches the empty path
    // to the route whose path is /dashboard
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  // The method is called forRoot because we
  // configure the router at the application root level
  // initialize the router and start listening for browser location changes

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
