import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {SpeedDialModule} from 'primeng/speeddial';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputTextModule} from 'primeng/inputtext';
import {BadgeModule} from 'primeng/badge';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import {InputSwitchModule} from 'primeng/inputswitch';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    SpeedDialModule,
    ProgressSpinnerModule,
    InputTextModule,
    BadgeModule,
    ProgressBarModule,
    ToastModule,
    InputSwitchModule
  ],
  exports: [
    TableModule,
    DialogModule,
    ButtonModule,
    SpeedDialModule,
    ProgressSpinnerModule,
    InputTextModule,
    BadgeModule,
    ProgressBarModule,
    ToastModule,
    InputSwitchModule
  ]
})
export class PrimengModule { }
