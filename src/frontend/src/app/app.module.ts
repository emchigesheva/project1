import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RegComponent}   from './register/register.component';
import {LoginComponent}   from './login/login.component';
import { routing }        from './app.routing';
import {AppComponent} from './app.component';
import {AuthenticationService} from './login/authentication.service'
@NgModule({
    imports:      [ BrowserModule, FormsModule, routing ],
    declarations: [ AppComponent, LoginComponent,RegComponent, AuthenticationService ],
    bootstrap:    [ AppComponent, LoginComponent, RegComponent, AuthenticationService ]
})
export class AppModule { }
