import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleComponent } from './extra/sample/sample.component';
import {CoursesService} from "./extra/services/courses.service";


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
