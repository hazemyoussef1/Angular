import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {
    path:"",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent,
    canActivate:[AuthguardService]
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
