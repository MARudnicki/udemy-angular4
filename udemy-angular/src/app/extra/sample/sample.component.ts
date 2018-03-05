import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  _title:string = "title value";

  courses:string[];

  constructor(private coursesService : CoursesService) {
      this.courses = this.coursesService.getCourses();
  }

  get title() {
    return this._title;
  }

  ngOnInit() {
  }

}
