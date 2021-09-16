import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  private headlineApi = environment.headlineApi;
  constructor(private http: HttpClient) {}

  headlineNews(): Observable<any> {
    return this.http.get(
      `${this.headlineApi}?country=us&category=business&apiKey=c11e932477b244e0b542b991d30b2962`
    );
  }
  headlineTech(): Observable<any> {
    return this.http.get(
      `${this.headlineApi}?country=us&category=technology&apiKey=c11e932477b244e0b542b991d30b2962`
    );
  }
}
