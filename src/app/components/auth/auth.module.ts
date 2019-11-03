import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path: 'login',  component: LoginComponent},
  {path: 'register',  component: RegisterComponent},

];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers:[AuthGuard]
})
export class AuthModule { }
