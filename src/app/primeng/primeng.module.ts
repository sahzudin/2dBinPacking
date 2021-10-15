import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {SpeedDialModule} from 'primeng/speeddial';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    SpeedDialModule
  ],
  exports: [
    TableModule,
    DialogModule,
    ButtonModule,
    SpeedDialModule
  ]
})
export class PrimengModule { }
