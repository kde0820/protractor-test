import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/data');
  }

  addData(todo: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/data' , todo, { headers: headers});
  }

  deleteData(id: number) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`http://localhost:3000/data/${id}`, { headers: headers});
  }

  changeData(id: number, todo: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`http://localhost:3000/data/${id}` , todo, { headers: headers});
  }
}
