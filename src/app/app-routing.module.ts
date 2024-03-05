import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { FechamentoComponent } from './fechamento/fechamento.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {
    path: '',
    redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then( m=> m.AdminRoutingModule)
 
   },
   {path: 'fechamento', component: FechamentoComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
