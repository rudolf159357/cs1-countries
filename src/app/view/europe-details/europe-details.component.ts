import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries } from 'src/app/models/countriesModel';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-europe-details',
  templateUrl: './europe-details.component.html',
  styleUrls: ['./europe-details.component.css']
})
export class EuropeDetailsComponent implements OnInit {

  id: number = 0;
  singleCountry!: Countries;

  constructor(private route: ActivatedRoute,private service: GetdataService) { }

  ngOnInit(): void {
    // getting id from url
    this.route.params.subscribe(params => {
      //console.log(params['id']);
      this.id = params['id']
    });
    // fetching data by id
    this.service.getEuropeDataById(this.id).subscribe({next: (res) => {
      //console.log(res);
      this.singleCountry = res;
    },
  error: (err) => {
    console.log(err);
  }});
  }

}
