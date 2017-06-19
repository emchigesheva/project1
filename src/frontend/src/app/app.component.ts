import { Component } from '@angular/core';

@Component({

    selector: 'my-app',
    template: `
        <h2>Lets do this!</h2>
        <div>
            <nav>
                <a routerLink="/auth" routerLinkActive="active">Sign IN</a>
                <a routerLink="/reg" routerLinkActive="active">Sign UP</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [` 
            h1, h2{color:navy;}
            p{font-size:13px; font-family:Verdana;}
    `]
})

export class AppComponent { }
