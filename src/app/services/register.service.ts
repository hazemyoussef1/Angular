import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  insertdata(data:any){
    return this.http.post("http://127.0.0.1:8000/api/register",data);
  }

  login(data:any){
    return this.http.post("http://127.0.0.1:8000/api/login",data);
  }
  
}
