import { Component, OnInit} from '@angular/core';
import {User} from '../user';
import {Http} from "@angular/http"
import {Router} from "@angular/router"
       
@Component({
    selector: 'reg',
    template: 
    `<h1>Registration</h1>

             <div>
                <div>
                    
                    Email:<input type="text" [(ngModel)]="email"/>
                </div>
                <div>
                    Password:<input type="password" [(ngModel)]="password"/>
                </div>
            
            
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="clickHandler()">Sign Up</button>
                </div>
             </div>
    <div>
    <ul>
        <li *ngFor="let user of userArray">{{user.email}}</li>
    </ul>
    </div>`,
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


