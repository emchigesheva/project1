import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RouterModule} from "@angular/router"
import { RegComponent }   from './register/register.component';
import { AuthComponent }   from './login/login.component';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component"
import {HttpModule} from "@angular/http"
import {InMemoryWebApiModule} from "angular-in-memory-web-api"
import {US} from "./fake_backend/fake_backend"
@NgModule({
    imports:
        [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot([
                {path: "reg", component: RegComponent},
                {path: "auth", component: AuthComponent},
                {path: "home", component: HomeComponent},
                {path: "", redirectTo: "auth", pathMatch: "full"}
    ]),
            InMemoryWebApiModule.forRoot(US)
],
    declarations: [ AppComponent, RegComponent,AuthComponent,HomeComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
