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

  result: number = 0;
  totalArea: number = 0;
  population: number = 0;
  cityPopulation: number = 0;

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

  checkboxValidation(){
    // if all checkboxes are checked or blank, than show error
    if(this.checkbox.area == false && this.checkbox.population == false && this.checkbox.cityPopulation == false ||
      this.checkbox.area == true && this.checkbox.population == true && this.checkbox.cityPopulation == true ||
      this.checkbox.area == true && this.checkbox.population == true || this.checkbox.area == true && this.checkbox.cityPopulation == true
      || this.checkbox.population == true && this.checkbox.cityPopulation == true){
      this.error = true;
      console.log("error");
    }
  }

  biggestValue(value: number, biggest: number){

    if(value > biggest && !(value <= 0)){
      biggest = value;
    } 
    return biggest;

  }

  smallestValue(value: number, smallest: number){


    if(value > smallest && !(value <= 0)){
        smallest = value;
      } 
    else if(value < smallest && !(value <= 0)){
      smallest = value;
    } 
    return smallest;

  }

  biggest(){

    this.checkboxValidation();

    if(this.error == false){
        // compare total area
      if(this.checkbox.area == true){
        this.result = 0;

        this.EuropeCountries.forEach(obj => {
          this.totalArea = this.biggestValue(obj.totalArea, this.totalArea)
        });

        this.AmericaCountries.forEach(obj => {
          this.totalArea = this.biggestValue(obj.totalArea, this.totalArea);
        });

        this.AsiaCountries.forEach(obj => {
          this.totalArea = this.biggestValue(obj.totalArea, this.totalArea);
        });

        this.result = this.totalArea;

      } else if (this.checkbox.population == true) {
        this.result = 0;

        this.EuropeCountries.forEach(obj => {
          this.population = this.biggestValue(obj.population, this.population)
        });

        this.AmericaCountries.forEach(obj => {
          this.population = this.biggestValue(obj.population, this.population);
        });

        this.AsiaCountries.forEach(obj => {
          this.population = this.biggestValue(obj.population, this.population);
        });

        this.result = this.population;
      } else if (this.checkbox.cityPopulation == true){
        this.result = 0;

        this.EuropeCountries.forEach(obj => {
          this.cityPopulation = this.biggestValue(obj.cityPopulation, this.cityPopulation)
        });

        this.AmericaCountries.forEach(obj => {
          this.cityPopulation = this.biggestValue(obj.cityPopulation, this.cityPopulation);
        });

        this.AsiaCountries.forEach(obj => {
          this.cityPopulation = this.biggestValue(obj.cityPopulation, this.cityPopulation);
        });

        this.result = this.cityPopulation;
      }
    }

    
  }

  smallest(){
    this.checkboxValidation();

    if(this.error == false){
        // compare total area
      if(this.checkbox.area == true){
        this.result = 0;

        this.EuropeCountries.forEach(obj => {
          this.totalArea = this.smallestValue(obj.totalArea, this.totalArea)
        });

        this.AmericaCountries.forEach(obj => {
          this.totalArea = this.smallestValue(obj.totalArea, this.totalArea);
        });

        this.AsiaCountries.forEach(obj => {
          this.totalArea = this.smallestValue(obj.totalArea, this.totalArea);
        });

        this.result = this.totalArea;

      } else if (this.checkbox.population == true) {
        this.result = 0;

        this.EuropeCountries.forEach(obj => {
          this.population = this.smallestValue(obj.population, this.population)
        });

        this.AmericaCountries.forEach(obj => {
          this.population = this.smallestValue(obj.population, this.population);
        });

        this.AsiaCountries.forEach(obj => {
          this.population = this.smallestValue(obj.population, this.population);
        });

        this.result = this.population;
      } else if (this.checkbox.cityPopulation == true){
        this.result = 0;

        this.EuropeCountries.forEach(obj => {
          this.cityPopulation = this.smallestValue(obj.cityPopulation, this.cityPopulation)
        });

        this.AmericaCountries.forEach(obj => {
          this.cityPopulation = this.smallestValue(obj.cityPopulation, this.cityPopulation);
        });

        this.AsiaCountries.forEach(obj => {
          this.cityPopulation = this.smallestValue(obj.cityPopulation, this.cityPopulation);
        });

        this.result = this.cityPopulation;
      }
    }
  }

 


}
