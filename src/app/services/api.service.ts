import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getData(value: number): Observable<any> {
    return this.httpClient.get(
      `http://localhost:8080/api/v1/bill?value=${value}`
    );
  }
}
