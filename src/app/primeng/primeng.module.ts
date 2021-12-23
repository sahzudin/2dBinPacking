import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {SpeedDialModule} from 'primeng/speeddial';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    SpeedDialModule,
    ProgressSpinnerModule,
    InputTextModule
  ],
  exports: [
    TableModule,
    DialogModule,
    ButtonModule,
    SpeedDialModule,
    ProgressSpinnerModule,
    InputTextModule
  ]
})
export class PrimengModule { }
