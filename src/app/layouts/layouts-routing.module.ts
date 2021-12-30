import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewWarrantComponent } from '../pages/new-warrant/new-warrant.component';
import { PackerComponent } from '../pages/packer/packer.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { WarrantsComponent } from '../pages/warrants/warrants.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children:
    [
      {path: '', component: PackerComponent, pathMatch: 'full'},
      {path: 'warrants', component: WarrantsComponent},
      {path: 'warrants/new', component: NewWarrantComponent},
      {path: 'settings', component: SettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule{}
