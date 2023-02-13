import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewapiserviceService {
  constructor(private http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=' +
    environment.API_KEY;

  topHeadline(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }
}
