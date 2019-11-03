import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { RentalService} from './shared/rental.service';
import {Routes, RouterModule} from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { NgPipesModule } from 'ngx-pipes';
import { MapModule } from '../map/map.module'
import { AuthGuard } from '../auth/shared/auth.guard';
import { Daterangepicker } from 'ng2-daterangepicker';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path: 'rentals', 
  component: RentalComponent,
  children:[
    {
      path:'', component: RentalListComponent
    },
    {path:':rentalId', component: RentalDetailComponent, canActivate: [AuthGuard]}
  ]

},

];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgPipesModule,MapModule,
    Daterangepicker
  ],
  providers: [RentalService],
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent,
    RentalDetailBookingComponent

  ]
})
export class RentalModule { }
