import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries } from 'src/app/models/countriesModel';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-america-details',
  templateUrl: './america-details.component.html',
  styleUrls: ['./america-details.component.css']
})
export class AmericaDetailsComponent implements OnInit {

  id:number = 0;
  singleCountry!: Countries;

  constructor(private route: ActivatedRoute, private service: GetdataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"]
    });

    this.service.getAmericaDataById(this.id).subscribe({next: (res) => {
     // console.log(res);
     this.singleCountry = res;
    },
  error: (err) => {
    console.log(err);
  }});
  }

}
