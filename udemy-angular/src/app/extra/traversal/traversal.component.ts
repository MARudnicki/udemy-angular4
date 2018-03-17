import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'traversal',
  templateUrl: './traversal.component.html',
  styleUrls: ['./traversal.component.css']
})
export class TraversalComponent implements OnInit {

  task = {
    "assagnee":{
      "name" : "inner-name"
    }/*,
    "phone" :{
      "num" :123
    }*/
  };
  // task.assagnee.name

  constructor() { }

  ngOnInit() {
  }

}
