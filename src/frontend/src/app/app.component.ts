import { Component } from '@angular/core';

@Component({

    selector: 'my-app',
    template: `
        <div>
            <router-outlet></router-outlet>
            <nav>
                <a routerLink="/auth" routerLinkActive="active">Sign IN</a>
                <label> or </label>
                <a routerLink="/reg" routerLinkActive="active">Sign UP</a>
            </nav>
            
        </div>
    `,
    styles: [` 
            nav {text-align: center; margin: auto}
            a:hover{text-decoration-line: underline}
    `]
})

export class AppComponent { }
