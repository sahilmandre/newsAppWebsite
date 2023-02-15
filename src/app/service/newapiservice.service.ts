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

  newsApiUrl = `https://newsdata.io/api/1/news?apikey=pub_${environment.API_KEY}&country=in&language=en`;

  techApiUrl = `https://newsdata.io/api/1/news?apikey=pub_${environment.API_KEY}&country=in&category=technology&language=en`;

  entertainmentApiUrl = `https://newsdata.io/api/1/news?apikey=pub_${environment.API_KEY}&country=in&category=entertainment&language=en`;

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
