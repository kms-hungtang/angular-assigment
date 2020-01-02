import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path: 'authenticate', component:AuthComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}