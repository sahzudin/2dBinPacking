import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { ItemsInfoComponent } from './components/items-info/items-info.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigFormComponent } from './components/config-form/config-form.component';
import { PrimengModule } from './primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ItemsInfoComponent,
    ItemFormComponent,
    ConfigFormComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PrimengModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
