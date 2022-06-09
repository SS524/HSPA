import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  properties:Array<IPropertyBase>;
  City='';
  SearchCity='';
  SortbyParam = '';
  SortDirection = 'asc';
  constructor(private route:ActivatedRoute, private housing:HousingService) {
    //this.properties=[]
  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.housing.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;

        console.log(data);
        console.log(this.route.snapshot.url.toString());
      },error=>{
        console.log(error);
      }

    )
  }
  onCityFilter(){
    this.SearchCity=this.City;
  }
  onCityFilterClear(){
    this.City='';
    this.SearchCity='';
  }
  onSortDirection(){
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}
