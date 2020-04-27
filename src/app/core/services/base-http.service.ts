import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private readonly URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  get(endpoint: string): Observable<any> {
    return this.http.get(this.URL + endpoint);
  }

  post(endpoint: string, body: {}): Observable<any> {
    return this.http.post(this.URL + endpoint, body);
  }
}
