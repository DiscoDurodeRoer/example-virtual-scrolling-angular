import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent implements OnInit {

  public listNumbers: number[];

  constructor() { }

  ngOnInit() {
    this.listNumbers = [];
    for (let index = 0; index <= 10000; index++) {
      this.listNumbers.push(index);
    }
    console.log(this.listNumbers);
  }

}
