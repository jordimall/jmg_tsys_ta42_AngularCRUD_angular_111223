import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlBase = 'https://rickandmortyapi.com/api/character';
@Injectable({
  providedIn: 'root',
})
export class ApiRickAndMortyService {
  constructor(private http: HttpClient) {}

  public allCharacters = (): any => {
    return this.http.get(urlBase);
  };

  public getAPIRandomCharacters = (range: string): any => {
    return this.http.get(`${urlBase}/${range}`);
  };

  public getShowCharacter = (id: string): any => {
    return this.http.get(`${urlBase}/${id}`);
  };
}
