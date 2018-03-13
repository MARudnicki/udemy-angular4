import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoursesService} from "./extra/services/courses.service";
import {FormsModule} from "@angular/forms";
import {SummaryPipe} from './extra/pipes/summary.pipe';
import {SomeComponent} from './extra/some/some.component';
import {PanelComponent} from './extra/panel/panel/panel.component';
import {LikeComponent} from './extra/like/like.component';
import {CustomDirectiveDirective} from './extra/directive/custom-directive.directive';
import {TraversalComponent} from "./extra/traversal/traversal.component";
import { ZippyComponent } from './assignment/zippy/zippy.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    SomeComponent,
    PanelComponent,
    LikeComponent,
    CustomDirectiveDirective,
    TraversalComponent,
    ZippyComponent
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
