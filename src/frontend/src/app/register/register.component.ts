import { Component, OnInit} from '@angular/core';
import {Http, RequestOptions, RequestMethod} from "@angular/http"
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
                <button class="btn_reg" (click)="clickHandler()">Sign Up</button>
            </div>
        </div>
    </div>`,
    styleUrls:['../css/forma.css']
})
export class RegComponent implements OnInit {

    email: string;
    password: string;
    token: string;

    ngOnInit(){

            this.token = JSON.parse(localStorage.getItem("token"));
            this.http.post("http://localhost:8000/token-verify",{
                token: this.token}).subscribe(
                result => {let json = result.json();
                    if (json) {

                        this.router.navigate(['/home']);
                    }
                },
                error => {
                    console.log(error.statusText)
                    this.router.navigate(['/reg'])
                }
            ) ;


    }
    constructor(private router: Router, private http: Http){}
     
    clickHandler() {

        this.http.post("http://localhost:8000/register",{
         email: this.email,
         password: this.password}).subscribe(
         result => {let json = result.json();
         if (json) {
         this.router.navigate(['/auth']);
         }
         },
         error => console.log(error.statusText)
         ) ;
         }
    }

