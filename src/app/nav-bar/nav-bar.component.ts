import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser:string;
  constructor(private router:Router) { }
 loggedIn(){
   this.loggedinUser=localStorage.getItem("token");
   return this.loggedinUser
 }
 onLogout(){
   localStorage.removeItem("token");
   this.router.navigate(['/user/login'])

 }
  ngOnInit() {
  }

}
