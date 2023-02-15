import { Component, OnInit } from '@angular/core';
import { NewapiserviceService } from '../service/newapiservice.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css'],
})
export class TechNewsComponent implements OnInit {
  techDisplayData: any = [];

  constructor(private serviceHttp: NewapiserviceService) {}

  ngOnInit() {
    this.serviceHttp.topTechHeadlines().subscribe(
      (data: any) => {
        // Handle data here
        console.log(data);
        this.techDisplayData = data.results;
      },
      (error) => {
        // Handle error here
        console.log(error);
        return 'error';
      }
    );
  }
}
