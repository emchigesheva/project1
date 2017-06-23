import { Component, OnInit} from '@angular/core';
import {Http} from "@angular/http"
import {Router} from "@angular/router"

@Component({
    selector: 'login',
    template:

        `<div class="form">
            <h1>Welcome!</h1>
            <div class="form-group">
                <div class="input-group">
                    <label>Email</label>
                    <input [(ngModel)]="email" type="email" placeholder="kt@gmail.com" autofocus/>
                    <label>Password</label>
                    <input type="password"[(ngModel)]="password" value="password"/>
                    <button class="btn btn-default" (click)="clickHandler()">Sign In</button>
                </div>
            </div>
        </div>`,
    styleUrls: ['../css/forma.css'],
})
export class AuthComponent implements OnInit{

    email: string;
    password: string;
    ngOnInit(){

    }
    constructor(private router: Router, private http: Http){}

    clickHandler() {


        this.http.post("http://localhost:8000/token-obtain",{
            username: this.email,
            password: this.password}).subscribe(
            result => {let json = result.json();
                if (json) {
                    localStorage.setItem("token", JSON.stringify(json.token));
                    this.router.navigate(['/home']);
                }
            },
            error => console.log(error.statusText)
        ) ;
    }





}