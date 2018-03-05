import {Injectable} from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() {
  }

  getCourses(): string[] {

    let array: string[] = [];
    for (let i = 0; i < 5; i++) {
      array.push("course" + i);
    }
    return array;
  }

}
