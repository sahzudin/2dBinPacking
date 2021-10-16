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
import { ItemsDialogComponent } from './components/dialogs/items-dialog/items-dialog.component';
import { PackerComponent } from './pages/packer/packer.component';
import { PackerInfoComponent } from './pages/packer/packer-info/packer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsInfoComponent,
    ItemFormComponent,
    ConfigFormComponent,
    ItemsDialogComponent,
    PackerComponent,
    PackerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PrimengModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
