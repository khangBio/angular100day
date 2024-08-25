import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from "../authors";

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() select = new EventEmitter<Author>();
  @Output() deleteAuthor = new EventEmitter<Author>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(){
    return this.deleteAuthor.emit(this.author);
  }

}
