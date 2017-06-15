import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <div class="col-sm-8 col-sm-offset-2">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: [` 
            h1, h2{color:navy;}
            p{font-size:13px; font-family:Verdana;}
    `]
})

export class AppComponent { }
