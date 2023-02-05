import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-asia-details',
  templateUrl: './asia-details.component.html',
  styleUrls: ['./asia-details.component.css']
})
export class AsiaDetailsComponent implements OnInit {

  id: number = 0;

  constructor(private route: ActivatedRoute, private service: GetdataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.service.getAsiaDataById(this.id).subscribe({next: (res) => {
      console.log(res);
    },
  error: (err) => {
    console.log(err);
  }});
  }

}
