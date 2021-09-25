import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { ItemsInfoComponent } from './components/items-info/items-info.component';
import { ItemFormComponent } from './components/item-form/item-form.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
