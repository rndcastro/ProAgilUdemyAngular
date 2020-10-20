import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvento } from '../_models/i-evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseURL = 'http://localhost:5000/Evento';
  constructor(private http: HttpClient) { }

  getAllEventos(): Observable<IEvento[]>{
    return this.http.get<IEvento[]>(this.baseURL);
  }

  getEventsById(id: number): Observable<IEvento[]>{
    return this.http.get<IEvento[]>(`${this.baseURL}/${id}`);
  }

  getEventsByTema(tema: string): Observable<IEvento[]>{
    return this.http.get<IEvento[]>(`${this.baseURL}/get-by-tema/${tema}`);
  }

}
