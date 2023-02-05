import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/models/countriesModel';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})
export class AmericaComponent implements OnInit {

  countryArray: Countries[] = [];

  constructor(private service: GetdataService) { }

  ngOnInit(): void {
    this.service.getAmericaData().subscribe({next: (res) => {
      console.log(res);
      this.countryArray = res;
    },
  error: (err) => {
    console.log(err)
  }})
  }

}
