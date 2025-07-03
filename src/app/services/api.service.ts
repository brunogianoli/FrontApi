import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetEstadisticasJugadorDTO, GetJugadoresDTO} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  getJugadores(){
    return this.http.get<GetJugadoresDTO[]>(`${this.apiUrl}/jugadores`);
  }
  getEstadisticasPorId(id:number){
    return this.http.get<GetEstadisticasJugadorDTO>(`${this.apiUrl}/jugadores/${id}/estadisticas`);





  }
}
