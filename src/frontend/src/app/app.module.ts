import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RegComponent}   from './register/register.component';
import {AppComponent} from './app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, RegComponent],
    bootstrap:    [ AppComponent, RegComponent]
})
export class AppModule { }
