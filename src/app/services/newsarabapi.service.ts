import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class NewsarabapiService {
  private headlineApi = environment.headlineApi;
  constructor(private http: HttpClient) {}
  newsArab(): Observable<any> {
    return this.http.get(
      `${this.headlineApi}?country=eg&category=business&apiKey=c11e932477b244e0b542b991d30b2962`
    );
  }
  sportEg(): Observable<any> {
    return this.http.get(
      `${this.headlineApi}?country=eg&category=sports&apiKey=c11e932477b244e0b542b991d30b2962`
    );
  }
}
