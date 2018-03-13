import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('isActive') isActive:boolean;

  constructor() { }

  onClick(){
    this.isActive = !this.isActive;
  }

  ngOnInit() {
  }

}
