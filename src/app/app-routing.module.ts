import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'porcionario', loadChildren: './porcionario/porcionario.module#PorcionarioPageModule' },
  { path: 'nosotros', loadChildren: './nosotros/nosotros.module#NosotrosPageModule' },
  { path: 'hacemos', loadChildren: './hacemos/hacemos.module#HacemosPageModule' },
  { path: 'moderacion', loadChildren: './moderacion/moderacion.module#ModeracionPageModule' },
  { path: 'super', loadChildren: './super/super.module#SuperPageModule' },
  { path: 'menus', loadChildren: './menus/menus.module#MenusPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
