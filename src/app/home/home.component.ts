import { Component, OnInit } from '@angular/core';

@Component({
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
  }

  ninja = {
    name: "Yoshi",
    belt: "Black"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
