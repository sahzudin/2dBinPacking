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
import { PalletesComponent } from './pages/packer/palletes/palletes.component';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WarrantsComponent } from './pages/warrants/warrants.component';
import { NewWarrantComponent } from './pages/new-warrant/new-warrant.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TokenInterceptorService } from './config/token-interceptor.service';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    ItemsInfoComponent,
    ItemFormComponent,
    ConfigFormComponent,
    ItemsDialogComponent,
    PackerComponent,
    PalletesComponent,
    WarrantsComponent,
    NewWarrantComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PrimengModule,
    FontAwesomeModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
