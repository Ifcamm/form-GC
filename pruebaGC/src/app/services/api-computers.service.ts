import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from '../models/computer';

@Injectable({
  providedIn: 'root',
})
export class ApiComputersService {
  apiPath = 'http://localhost:3000/api/computer';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Computer[]>(this.apiPath);
  }

  get(id: string) {
    return this.http.get(`${this.apiPath}/${id}`);
  }

  post(parameters: Computer) {
    return this.http.post(`${this.apiPath}/create`, parameters);
  }

  put(id: string, parameters: Computer) {
    return this.http.put(`${this.apiPath}/${id}`, parameters);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiPath}/${id}`);
  }
}
