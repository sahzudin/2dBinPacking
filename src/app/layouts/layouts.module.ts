import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { FontawesomeModule } from '../fontawesome/fontawesome.module';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    FontawesomeModule,
    PrimengModule
  ]
})
export class LayoutsModule { }
