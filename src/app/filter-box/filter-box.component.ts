import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
const LIST=[
  {
    status:"active", 
    sublist:[
      {label:"bork", value:"qwe"},
      {label:"tork", value:"123"},
    ]},
  {
    status:"active", 
    sublist:[
      {label:"bork", value:"asd"},
      {label:"scant", value:"123"},
    ]},
];

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {
  label: string;
  value: string;
  list;
  filterList;
  finalFilterList;
  constructor() { 
    this.list = LIST;
  }

  ngOnInit() {
  }
  filterLabel(l: string){
    let filterList = [];
    this.label = l;
    this.list.forEach(obj => {
      // alert(JSON.stringify(obj));
      obj.sublist.forEach(element => {
        if(element.label===l) filterList.push(obj);
      });
    });
    this.filterList = filterList;
  }
  filterValue(v: string){
    this.value = v;
    let filterList = [];
    this.list.forEach(obj => {
      // alert(JSON.stringify(obj));
      obj.sublist.forEach(element => {
        if(element.value===v) filterList.push(obj);
      });
    });
    this.finalFilterList = filterList;
  }
}
