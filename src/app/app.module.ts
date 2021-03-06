import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { RentalComponent} from './components/rental/rental.component';
import { FormsModule } from '@angular/forms';
import {RentalModule} from './components/rental/rental.module';
import { AuthModule } from './components/auth/auth.module';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageModule } from './components/manage/manage-booking/manage.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',component: HomeComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RentalModule,
    AuthModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    ManageModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
