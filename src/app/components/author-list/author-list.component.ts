import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';

const authors = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    gender: 'male',
    ipAddress: '192.168.1.1',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'janesmith@example.com',
    gender: 'female',
    ipAddress: '192.168.1.2',
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bobjohnson@example.com',
    gender: 'male',
    ipAddress: '192.168.1.3',
  },
  // add more author objects here
];

@Component({
  selector: 'app-author-list',
  template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (deleteAuthor)="handleDelete($event)"
    ></app-author-detail>
  `,
})
export class AuthorListComponent implements OnInit {
  authors?: any[];
  ngOnInit(): void {
    this.authors = authors;
  }
  handleDelete(author: Author) {
    this.authors = this.authors?.filter((item) => item.id !== author.id);
  }
}
