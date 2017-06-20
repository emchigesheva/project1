import { Component, OnInit} from '@angular/core';
import {Http} from "@angular/http"
import {Router} from "@angular/router"
import {User} from '../user';


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

    userArray: any[];
    email: string;
    password: string;
    ngOnInit(){
        this.http.get("app/us").subscribe(
            result => this.userArray = result.json().data,
            error => console.log(error.statusText)
        );
    }
    constructor(private router: Router, private http: Http){}

    clickHandler() {

    for (var user of this.userArray){
        if((user.email==this.email) &&(user.password==this.password)){
            this.router.navigate(['/home']);
        }
        else{
            console.log("NO USER");
        }
    }




    }
}