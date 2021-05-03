import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Pet} from '../model/pet';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl).pipe(
      map(result => result.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      }))
    );
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.baseUrl, pet);
  }

  getPetByName(name: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/${name}`).pipe(map(response => response));
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
}
