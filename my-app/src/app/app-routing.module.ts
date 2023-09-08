import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { aboutComponent } from './about/about.component';
import { portfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  {path:'portfolio',component:portfolioComponent,title:'ِِِAngular-portfolio'},
  {path:'about',component:aboutComponent,title:'ِِِAngular-about'},
  {path:'contact',component:ContactComponent,title:'Angular-contact'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
