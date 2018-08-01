import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {
  input: string = "YOLO";
  constructor() { }

  ngOnInit() {
  }

}
