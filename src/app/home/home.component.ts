import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {

  	this.authService.login();
  }

  onLogout() {

  	this.authService.logout();
  }
}
