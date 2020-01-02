import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { ModalService } from '../shared/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  user: User;
  constructor(private authService: AuthService, private modalService: ModalService) { }

  logoUrl: String;
  menuItems: String[];
  avatarUrl: String;
  email: String;
  leftNavItems: String[];

  ngOnInit() {

    this.logoUrl = "https://cdn.worldvectorlogo.com/logos/angular-icon.svg";
    this.menuItems = ["Home", "Page 1", "Page 2"];
    this.avatarUrl = "https://www.w3schools.com/howto/img_avatar.png";
    this.leftNavItems = ["Services", "Clients", "Contact"];
    const loadedUser = this.authService.getUserFromLocalStorage();
    if (loadedUser) {
      this.user = loadedUser;
      this.email = loadedUser.email;
      const lastCount = +localStorage.getItem('loadedCount');
      localStorage.setItem('loadedCount', ''+(1+lastCount));
    }
    
  }

  ngAfterViewInit(){
    const loadedCount = localStorage.getItem("loadedCount");
    if(loadedCount==='1'){
      this.openModal('custom-modal-1');
    }
    
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
