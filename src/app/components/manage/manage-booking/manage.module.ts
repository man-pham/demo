import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ManageBookingComponent } from './manage-booking.component';
import { AuthGuard } from '../../auth/shared/auth.guard';
import { ManageComponent } from '../manage.component';
import { NgPipesModule } from 'ngx-pipes';

const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    children: [
      
      { path: 'bookings', component: ManageBookingComponent,canActivate: [AuthGuard]}
    ]
  }
]

@NgModule({
  declarations: [
    ManageComponent,
    ManageBookingComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgPipesModule
    
  ],
  providers: []
  
})
export class ManageModule { }