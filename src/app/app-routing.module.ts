import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'', redirectTo:"home" , pathMatch:"full"}, 
  {path:'home',component:HomeComponent}, 
  {path:'about',component:AboutComponent}, 
  {path:'services',component:ServicesComponent}, 
  {path:'portfolio',component:PortfolioComponent}, 
  {path:'contact',component:ContactsComponent}, 
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
