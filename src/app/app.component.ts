import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [
    { position: 1, id: 0, name: 'Greg' },
    { position: 2, id: 1, name: 'Cindy' }
  ];
  colsToDisplay = ['id', 'name'];
}
