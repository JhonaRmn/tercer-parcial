import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Introduccion } from './components/pages/introduccion/introduccion';
import { Precedentes } from './components/pages/precedentes/precedentes';

const routes: Routes = [
  {path:'', component:Home},
  {path:'introduccion', component:Introduccion},
 {path:'precedentes', component:Precedentes},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
