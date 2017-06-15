import { Component, OnInit} from '@angular/core';
import {Authentication} from './register.service';
import {User} from '../user';
       
@Component({
    selector: 'my-app',
    template: 
    `<h1>Registration</h1>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="first_name"/>
                </div>
            </div>
             <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="last_name"/>
                </div>
            </div>
             <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="email"/>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="password" class="form-control" [(ngModel)]="password"/>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addData(first_name, last_name, email, password)">Sign Up</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.first_name}}</td>
                    <td>{{item.last_name}}</td>
                    <td>{{item.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>`,
    providers: [Authentication]
})
export class RegComponent implements OnInit {
     
    items: User[] = [];
    constructor(private authentication: Authentication){}
     
    addData(first_name: string, last_name: string, email: string, password: string){
         
        this.authentication.addData(first_name, last_name, email, password);
    }
    ngOnInit(){
        this.items = this.authentication.getData();
    }
}
