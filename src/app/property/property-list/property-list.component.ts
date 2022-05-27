import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Array<any>=[{
    "Id":1,
    "Type":'House',
    "Price":12000000,
    "Name":'Birla House'

  },
  {
    "Id":2,
    "Type":'House',
    "Price":15000000,
    "Name":'Ambani House'

  },
  {
    "Id":3,
    "Type":'Hotel',
    "Price":1200000,
    "Name":'Taj Hotel'

  },
  {
    "Id":4,
    "Type":'University',
    "Price":120000,
    "Name":'Jadavpur University'

  },
  {
    "Id":5,
    "Type":'House',
    "Price":12000,
    "Name":'My House'

  }]
  constructor() { }

  ngOnInit(): void {
  }

}
