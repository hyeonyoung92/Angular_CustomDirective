import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { OrdinalPipe} from './ordinal.pipe';
import { MyDatePipe } from './mydate.pipe';
import { HiddenDirective } from './hidden.directive';
import { UnderlineDirective } from './underline.directive';

@NgModule({
    imports:  [ BrowserModule ],
    declarations: [ AppComponent,OrdinalPipe,MyDatePipe,HiddenDirective,UnderlineDirective ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}