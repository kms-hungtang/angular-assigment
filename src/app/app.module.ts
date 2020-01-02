import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './shared/dropdow.driective';
import { SideLeftNavComponent } from './side-left-nav/side-left-nav.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinerLoadingComponent } from './spiner-loading/spiner-loading.component';
import { AppRoutingModule } from './app-routing.modules';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './shared/modal/modal.component';
import { UserDataComponent } from './user-data/user-data.component';
import {NgxHungDataUserComponent} from 'ngx-hung-data-user';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownDirective,
    SideLeftNavComponent,
    FooterComponent,
    AuthComponent,
    SpinerLoadingComponent,
    HomeComponent,
    ModalComponent,
    UserDataComponent,
    NgxHungDataUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
