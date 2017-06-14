import { Component } from '@angular/core';

export class User{
    constructor(public email: string,
                public password: string)
    { }
}

@Component({
    selector: 'my-app',
    template: `<div class="col-xs-10">
        <div class="form-group" align="center">
            <label>E-mail:</label>
            <input class="form-control" name="email" [(ngModel)]="user.email" />
        </div>
        <div class="form-group" align="center">
            <label>Password</label>
            <input type="password" class="form-control" name="password" [(ngModel)]="user.password" />
        </div>
        <div class="form-group" align="center">
            <button class="btn btn-default">REG</button>
        </div>
    </div>`
})
export class AppComponent {
    email= 'kt@gmail.com';
    password='';
}