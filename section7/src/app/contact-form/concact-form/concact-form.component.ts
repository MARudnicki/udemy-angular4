import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'concact-form',
  templateUrl: './concact-form.component.html',
  styleUrls: ['./concact-form.component.css']
})
export class ConcactFormComponent implements OnInit {

  @Input('some') some:string;
  some2:string = "some2-valie";

  firstName: string;

  constructor() { }

  ngOnInit() {
  }

  submit(f){
    console.log(f)
  }

  onClick(f){
    console.log(f);
  }

}
