import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class NewsarabapiService {
  constructor(private http: HttpClient) {}
  newsArab(mediatype: string): Observable<any> {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=eg&category=${mediatype}&apiKey=c11e932477b244e0b542b991d30b2962`
    );
  }
  sportEg(mediatype: string): Observable<any> {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=eg&category=${mediatype}&apiKey=c11e932477b244e0b542b991d30b2962`
    );
  }
}
