import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router){};

  @Input() logoUrl: String;
  @Input() menuItems: String[];
  @Input() avatarUrl: String;
  @Input() email: String;

  isLogined = false;

  ngOnInit() {
    this.isLogined = !! this.email;
  }

  onLogout(){
    localStorage.setItem('loadedCount', '');
    this.authService.logout();
    this.router.navigate(['authenticate']);
  }
}
