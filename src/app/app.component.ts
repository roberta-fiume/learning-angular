import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'I m learning angular';
  name = 'Roberta';

  ninja = {
    name: "Ryu",
    belt: "Red"
  };

  robertaProp = 'Roberta'
  lastName = "Fiume";
  siblings = ["Antonio, Marco"];
  
  yell(e: any) {
    alert("I'm yelling");
    console.log("event", e);
  }
  // ngOnInit(){
  //   this.firstName = 'John';
  //   this.lastName = 'Doe';
  //   this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
  // }


}
