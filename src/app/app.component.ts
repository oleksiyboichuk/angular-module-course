import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course';

  user = {
    name: "Alex",
    age: '21',
  };

  tooltip = "Some secret";

  inlineStyle = {
    width: '50%',
    background: 'green'
  }

  classStyle = 'blue';

  someNumber = 20
}
