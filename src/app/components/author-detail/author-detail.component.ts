import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from 'src/app/interfaces/author';

@Component({
  selector: 'app-author-detail',
  template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button style="cursor: pointer;" (click)="handleDelete()">x</button>
    </div>
  `,
})
export class AuthorDetailComponent {
  @Input() author?: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}
  ngOnInit() {}
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
