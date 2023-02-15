import { Component, OnInit } from '@angular/core';
import { NewapiserviceService } from '../service/newapiservice.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css'],
})
export class TopHeadlinesComponent implements OnInit {
  topHeadingDisplayData: any = [];

  constructor(private serviceHttp: NewapiserviceService) {}

  ngOnInit() {
    this.serviceHttp.topHeadline().subscribe(
      (data) => {
        // Handle data here
        this.topHeadingDisplayData = data.results;
        console.log(data);
      },
      (error) => {
        // Handle error here
        console.log(error);
        return 'error';
      }
    );
  }
}

// constructor(private httpService: NewapiserviceService) {}

// ngOninit() {
//   this.httpService.topHeadline().subscribe((data) => {
//     console.log(data);
//   });
// }
