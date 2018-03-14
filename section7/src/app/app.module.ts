import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConcactFormComponent } from './contact-form/concact-form/concact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ConcactFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
