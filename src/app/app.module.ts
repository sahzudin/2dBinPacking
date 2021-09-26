import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { ItemsInfoComponent } from './components/items-info/items-info.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ItemsInfoComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
