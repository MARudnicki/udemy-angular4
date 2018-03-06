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

  isActive:boolean = true;

  email:string;

  imageUrl:string = "http://brandmark.io/logo-rank/random/pepsi.png";
  myNumer: number = 1.123;
  myTime:Date = new Date(2018,1,1);
  longText:string = "alafdasdfasdfnsadcijsdciasddcbsadicubadsiubca";

  constructor(private coursesService : CoursesService) {
      this.courses = this.coursesService.getCourses();
  }


  onKeyUp(){
    console.log(this.email);
  }

  get title() {
    return this._title;
  }

  ngOnInit() {
  }

  myClick($event) {
    console.log($event);
    $event.stopPropagation();
    this.isActive = !this.isActive;
  }
}
