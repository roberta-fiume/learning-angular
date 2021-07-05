import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name = "";

  constructor(private router: Router) { 
    // this.name = this.router.getCurrentNavigation().extras.state.example;
    console.log(this.router.getCurrentNavigation());
  }

  



  ngOnInit(): void {
    this.name = history.state.example;
  }

}
