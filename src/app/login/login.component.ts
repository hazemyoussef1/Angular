import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../register';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginserv:RegisterService , private router: Router){}
  users = new Register
  rows:any;
  login(){
    this.loginserv.login(this.users).subscribe(result=>{
    this.rows=result
      // localStorage.setItem('token',this.rows.token)
      sessionStorage.setItem('email',this.rows.user.email);
      sessionStorage.setItem('name',this.rows.user.name);
      localStorage.setItem('token',this.rows.token);
      this.router.navigate(['/home']);
    })
  }
  
  
}
