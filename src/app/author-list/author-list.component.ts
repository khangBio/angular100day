import { Component, OnInit } from '@angular/core';
import {Author, authors} from "../authors";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(selectedAuthor: Author) {
    return this.currentAuthor = selectedAuthor;
  }

  handleDeleteAuthor(author: Author) {
    this.authors = this.authors.filter(x => x.id !== author.id);
    this.currentAuthor = this.authors[0];
    return this.authors;
  }

}
