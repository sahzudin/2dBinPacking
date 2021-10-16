import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackerComponent } from '../pages/packer/packer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children:
    [
      {path: '', component: PackerComponent, pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule{}
