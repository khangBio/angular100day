import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  user = {
    name: "John stone",
    age: 29
  }
  address = "MEKONG ITP";
  level = "Senior";

  isDanger = false;
  isWarning = false;

  constructor() { }

  ngOnInit(): void {
  }

  hander(){
    alert("HelloworldComponent")
  }

  protected readonly isFinite = isFinite;
}
