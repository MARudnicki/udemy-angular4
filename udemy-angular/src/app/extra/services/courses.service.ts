import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CoursesService {

  constructor(http:HttpClient) {
  }

  getCourses(): string[] {

    let array: string[] = [];
    for (let i = 0; i < 5; i++) {
      array.push("course" + i);
    }
    return array;
  }

}
