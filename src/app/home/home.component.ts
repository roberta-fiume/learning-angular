import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // inputs: ['ninja'],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to Roberta homepage!";
  myString = "I like chicken";
  myBoolean = true;

  alertMe(val: any) {
    alert(val);
  };

  // ninja = {
  //   name: "Yoshi",
  //   belt: "Black"
  // };

  constructor() { }

  @Input() ninja: any;

  @Input() firstName = '';
  @Input() lastName: any;
  @Input() siblings: any;

  @Output() onYell = new EventEmitter();


  JulioName = 'Julio Lopez'

  fireYellEvent(e: any) {
    this.onYell.emit(e);
  }

  ngOnInit(): void {
  }

}
