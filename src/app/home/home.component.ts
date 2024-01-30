import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}
  getemail(){
    return sessionStorage.getItem('email');
  }
  getname(){
   return sessionStorage.getItem('name');

  }
  logout(){
     localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
