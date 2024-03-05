import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { PoButtonModule, PoTableModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PoTableModule,
    PoButtonModule
  ]
})
export class AdminModule { }
