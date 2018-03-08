import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleComponent } from './extra/sample/sample.component';
import {CoursesService} from "./extra/services/courses.service";
import {FormsModule} from "@angular/forms";
import { SummaryPipe } from './extra/pipes/summary.pipe';
import { SomeComponent } from './extra/some/some.component';
import { PanelComponent } from './extra/panel/panel/panel.component';
import { LikeComponent } from './extra/like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SummaryPipe,
    SomeComponent,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
