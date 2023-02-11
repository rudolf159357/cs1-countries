import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/models/countriesModel';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.css']
})
export class ComparatorComponent implements OnInit {

  checkbox = {
    area: false,
    population: false,
    cityPopulation: false
  };

  EuropeCountries: Countries[] = [];
  AmericaCountries: Countries[] = [];
  AsiaCountries: Countries[] = [];

  error: boolean = false;

  constructor(private service: GetdataService) { }

  ngOnInit(): void {
    this.service.getEuropeData().subscribe({next: (res) => {
      //console.log(res);
      this.EuropeCountries = res;
    },
  error: (err) => {
    console.log(err);
  }});

    this.service.getAmericaData().subscribe({next: (res) => {
      //console.log(res);
      this.AmericaCountries = res;
    },
  error: (err) => {
    console.log(err);
  }});

    this.service.getAsiaData().subscribe({next: (res) => {
      //console.log(res);
      this.AsiaCountries = res;
    },
    error: (err) => {
    console.log(err);
    }});
  }

  biggest(){
    // if all checkboxes are checked or blank, than show error
    if(this.checkbox.area == false && this.checkbox.population == false && this.checkbox.cityPopulation == false ||
      this.checkbox.area == true && this.checkbox.population == true && this.checkbox.cityPopulation == true ||
      this.checkbox.area == true && this.checkbox.population == true || this.checkbox.area == true && this.checkbox.cityPopulation == true
      || this.checkbox.population == true && this.checkbox.cityPopulation == true){
      this.error = true;
      console.log("error");
      return;
    }
    // compare total area
    if(this.checkbox.area == true){
      console.log("area");

    } else if (this.checkbox.population == true) {
      console.log("population");
    } else {
      console.log("city population");
    }
  }

  smallest(){}

}
