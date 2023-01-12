import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {

  items:Array<string> = ['Akou','Jean','Vivien'];
  today: number = Date.now();
}

