import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css'],
})
export class SomeComponent implements OnInit {

  isSelected: boolean = true;

  post = {
    title: "Title",
    isFavourite: true
  };

  // @Input('isFavourite') isFavourite: boolean;

  @Output() change = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick($event?) {
    console.log("click !" + $event + " state " + this.isSelected);
    this.isSelected = !this.isSelected;
    this.change.emit({state: this.isSelected});

  }

}
