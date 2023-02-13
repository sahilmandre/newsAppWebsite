import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewapiserviceService {
  entertainment() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=' +
    environment.API_KEY;

  techApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=' +
    environment.API_KEY;

  entertainmentApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=' +
    environment.API_KEY;

  topHeadline(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }

  topTechHeadlines(): Observable<any> {
    return this.http.get(this.techApiUrl);
  }

  topEntertainmentHeadlines(): Observable<any> {
    return this.http.get(this.entertainmentApiUrl);
  }
}
