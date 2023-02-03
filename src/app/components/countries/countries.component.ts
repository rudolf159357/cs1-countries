import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() title: string = "title";


  constructor() { }

  ngOnInit(): void {
  }

}
