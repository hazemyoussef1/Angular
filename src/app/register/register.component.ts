import { Component } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
user=new Register
constructor(private registerserv:RegisterService){}
  register(){
this.registerserv.insertdata(this.user).subscribe(resu=>{
  
})
  }

}
