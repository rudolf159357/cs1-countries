import { Component, Input, OnInit } from '@angular/core';
import { Countries } from 'src/app/models/countriesModel';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() title: string = "title";
  @Input() countries: Countries[] = [] ;


  constructor() { }

  ngOnInit(): void {
  }

}
