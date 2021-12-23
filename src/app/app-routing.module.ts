import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { GuestGuardService } from './guards/guest-guard.service';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [GuestGuardService]
  },
  { path: 'packer',
    loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
