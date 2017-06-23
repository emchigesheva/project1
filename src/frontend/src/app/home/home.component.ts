import { Component, OnInit} from '@angular/core';
import {Http} from "@angular/http"
import {Router} from "@angular/router"
@Component({
    selector: 'home',
    template:
    `<div class="form">
        <h1>Home!</h1>
        <button class="btn btn-default" (click)="clickHandler()">Logout</button>
    </div>`,
    styleUrls: ['../css/forma.css']
})
export class HomeComponent implements OnInit{
    token: string;

    ngOnInit(){
        this.token = JSON.parse(localStorage.getItem("token"));
        console.log(this.token);
        this.http.post("http://localhost:8000/token-verify",{
            token: this.token}).subscribe(
            result => {let json = result.json();
                if (json) {

                    console.log(JSON.stringify(json.token));
                    console.log(JSON.stringify(this.token));
                    this.router.navigate(['/home']);
                }
            },
            error => {
                console.log(error.statusText)
                this.router.navigate(['/auth'])
            }
        ) ;

    }
    constructor (private http: Http, private router: Router){}
    clickHandler(){
        localStorage.removeItem("token");
        this.router.navigate(['/auth']);

    }


}