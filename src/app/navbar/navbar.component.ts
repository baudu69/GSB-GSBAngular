import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  authStatus: boolean;
  constructor() { }

  ngOnInit(): void {
    this.authStatus = localStorage.getItem('connected') === 'true';
  }

  onSignIn() {
    localStorage.setItem('connected', 'true');
    this.authStatus = localStorage.getItem('connected') === 'true';
  }

  onSignOut() {
    localStorage.setItem('connected', 'false');
    this.authStatus = localStorage.getItem('connected') === 'true';
  }

}
