import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries } from 'src/app/models/countriesModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() title: string = "Country";
  @Input() countryData!: Countries;


  constructor() { }

  ngOnInit(): void {
  }

}
