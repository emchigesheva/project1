import { Component, OnInit} from '@angular/core';
import {Http} from "@angular/http"
import {Router} from "@angular/router"
import {User} from '../user';

@Component({
    selector: 'login',
    template:
            `<h1>Login</h1>
    <div>
        <label for="email">EMAIL</label>
        <input [(ngModel)]="email"/>
    </div>

    <div>
        <label for="password">Password</label>
        <input type="password" [(ngModel)]="password"/>
    </div>
    <div class="col-md-offset-2 col-md-8">
        <button class="btn btn-default" (click)="clickHandler()">Sign In</button>
    </div>`
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

    for (var i of this.userArray){
        if((i.email==this.email) &&(i.password==this.password)){
            this.router.navigate(['/home']);
        }
        else{
            console.log("NO USER");
        }
    }




    }
}