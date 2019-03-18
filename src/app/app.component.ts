import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from './servicesshared/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oppex';
  user: firebase.User;
  userPresent: Boolean ;

  constructor(
      private router: Router,
      private serv: AuthService
  ) { }

  loadLogin() {
    this.router.navigate(['/login']);
  }
  goToSignup() {
    this.router.navigate(['/signup']);
  }

  logoutUser(){
    this.serv.doLogout();
    this.userPresent=false;
    this.router.navigate(['/home']);

  }
  ngOnInit() {
    this.serv.getLoggedInUser().subscribe(usr => {
      if (usr) {
        this.user = usr;
        this.userPresent = true;
        console.log(this.userPresent,this.user);
      } else {
        this.userPresent = false;
      }
    });
  }
}
