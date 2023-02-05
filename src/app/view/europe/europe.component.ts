import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/models/countriesModel';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {

  countryArray: Countries[] = [];

  constructor(private service: GetdataService) { }

  ngOnInit(): void {
    this.service.getEuropeData().subscribe({next: (res) => {
      console.log(res);
      this.countryArray = res;
    },
  error: (err) => {
    console.log(err)
  }})
  }

}
