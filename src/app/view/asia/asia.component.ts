import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/models/countriesModel';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {

  countryArray: Countries[] = [];

  constructor(private service: GetdataService) { }

  ngOnInit(): void {
    this.service.getAsiaData().subscribe({next: (res) => {
      console.log(res);
      this.countryArray = res;
    },
  error: (err) => {
    console.log(err)
  }})
  }

}
