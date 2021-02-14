import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(`${environment.apiUrl}${url}`);
  }

  delete(url) {
    return this.http.delete(`${environment.apiUrl}${url}`);
  }
}
