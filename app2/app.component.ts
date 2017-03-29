import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
                <my-pipe></my-pipe>
                <my-directive></my-directive>
                `
})

export class AppComponent {
    name = 'Angular';
 }