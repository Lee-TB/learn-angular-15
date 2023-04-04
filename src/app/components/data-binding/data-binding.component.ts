import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  user = {
    name: 'Duc Tran',
    age: 24,
  };
  showName: boolean = false;

  toggleName() {
    this.showName = !this.showName;
  }
}
