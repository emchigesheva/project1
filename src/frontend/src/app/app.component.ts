import { Component } from '@angular/core';

@Component({
    selector: 'my',
    template: `<h1>Hello Angular 2</h1>
            <p>Angular 2 представляет модульную архитектуру приложения</p>`,
    styles: [` 
            h1, h2{color:navy;}
            p{font-size:13px; font-family:Verdana;}
    `]
})

export class AppComponent { }
