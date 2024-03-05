import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MenuComponent } from './core/menu/menu.component';
import { AdminModule } from './admin/admin.module';
import { FechamentoComponent } from './fechamento/fechamento.component';


@NgModule({
  declarations: [
    AppComponent,
    FechamentoComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    CoreModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
