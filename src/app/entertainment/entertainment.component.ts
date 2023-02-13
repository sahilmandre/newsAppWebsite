import { Component, OnInit } from '@angular/core';
import { NewapiserviceService } from '../service/newapiservice.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
})
export class EntertainmentComponent implements OnInit {
  entertainmentDisplayData: any = [];

  constructor(private http: NewapiserviceService) {}

  ngOnInit() {
    this.http.topEntertainmentHeadlines().subscribe(
      (data: any) => {
        // Handle data here
        console.log(data);
        this.entertainmentDisplayData = data.articles;
      },
      (error: any) => {
        // Handle error here
        console.log(error);
        return 'error';
      }
    );
  }
}
