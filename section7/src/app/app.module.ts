import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConcactFormComponent } from './contact-form/concact-form/concact-form.component';
import {FormsModule} from "@angular/forms";
import { RadioComponent } from './radio/radio/radio.component';


@NgModule({
  declarations: [
    AppComponent,
    ConcactFormComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
