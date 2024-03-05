import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PoModule } from '@po-ui/ng-components';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MenuComponent,
    ToolbarComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    PoModule,
    
  ],
  exports:[
    MenuComponent,
    ToolbarComponent,
  ]
})
export class CoreModule { }
