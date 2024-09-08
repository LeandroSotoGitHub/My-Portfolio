import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ProyectCardComponent } from './proyect-card/proyect-card.component';


@NgModule({
  declarations: [
    MenuComponent,
    ProyectCardComponent
  ],
  exports:[
    MenuComponent,
    ProyectCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
