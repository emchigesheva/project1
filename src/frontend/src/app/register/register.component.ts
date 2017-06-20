import { Component, OnInit} from '@angular/core';
import {User} from '../user';
import {Http} from "@angular/http"
import {Router} from "@angular/router"
       
@Component({
    selector: 'reg',
    template:
    `<div class="form">
        <h1>Registration!</h1>
        <div class="form-group">
            <div class="input-group">
                <label>Email</label>
                <input [(ngModel)]="email" type="email" placeholder="kt@gmail.com"/>
                <label>Password</label>
                <input type="password"[(ngModel)]="password" value="password"/>
                <button class="btn btn-default" (click)="clickHandler()">Sign Up</button>
            </div>
        </div>
    </div> 

    <div>
    <ul>
        <li *ngFor="let user of userArray">{{user.email}}</li>
    </ul>
    </div>`,
    styleUrls:['../css/forma.css']
})
export class RegComponent implements OnInit {
     
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
        this.http.post("app/us",{
            email: this.email,
            password: this.password}).subscribe(
                result => {let json = result.json();
                if (json) {
                    this.userArray.push(json.data);
                    this.router.navigate(['/auth']);
                }
                },
            error => console.log(error.statusText)
        ) ;
        }
    }


