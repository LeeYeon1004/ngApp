import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://6333cc47433198e79dc95f94.mockapi.io/ngApp';
  constructor(private httpClient: HttpClient) {}
  public getNews() {
    return this.httpClient.get(this.baseUrl);
  }
  public postItem(item: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, item);
  }
}
