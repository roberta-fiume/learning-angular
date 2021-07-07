import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  @Input() fullName = '';

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('toggle');
  }

}
