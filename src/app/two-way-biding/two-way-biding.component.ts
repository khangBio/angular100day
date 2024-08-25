import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-two-way-biding',
  templateUrl: './two-way-biding.component.html',
  styleUrls: ['./two-way-biding.component.css']
})
export class TwoWayBidingComponent implements OnInit {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
