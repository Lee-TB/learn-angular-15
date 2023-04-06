import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  checked: boolean = true;

  constructor() {
    console.log('checked: ', this.checked);
  }

  ngOnInit(): void {
    console.log('checked: ', this.checked);
  }

  logger(value: any) {
    console.log(value);
  }
}
