import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './../models/Character.model';

const baseUrl = 'https://jmg-tsys-ta42-bd-json-111223-production.up.railway.app/characters';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  constructor(private http: HttpClient) {}

  allData = (): Observable<Character[]> => {
    return this.http.get<Character[]>(`${baseUrl}?_sort=id`);
  };

  allDataByIds = (filter:string): Observable<Character[]> => {
    return this.http.get<Character[]>(`${baseUrl}?${filter}&_sort=id`);
  };

  getIdData = (id: number): Observable<Character> => {
    return this.http.get<Character>(`${baseUrl}/${id}`);
  };

  postData = (data: any): Observable<any> => {
    return this.http.post(baseUrl, data);
  };

  putDatas = (id: number, data: any): Observable<any> => {
    return this.http.put(`${baseUrl}/${id}`, data);
  };

  deletData = (id: number): Observable<any> => {
    return this.http.delete(`${baseUrl}/${id}`);
  };
}
