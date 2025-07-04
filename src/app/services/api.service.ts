import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GetCLubesDTO, GetEstadisticasJugadorDTO, GetJugadoresDTO, PutEstadisticasDTO} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  getJugadores(club?: string, posicion?:string, desde?: string, hasta?: string, activo?: boolean) {
    // const params = new HttpParams()
    // club && params.set('club', club)
    // posicion && params.set('posicion', posicion)
    // desde && params.set('desde', desde)
    // hasta && params.set('hasta', hasta)
    // activo && params.set('activo', activo)


    let params = new HttpParams();
  if (club){params = params.set('club', club);}
  if (posicion){params = params.set('posicion', posicion);}
  if (desde){params = params.set('desde', desde);}
  if (hasta){params = params.set('hasta', hasta);}

    return this.http.get<GetJugadoresDTO[]>(this.apiUrl+ "/jugadores" , {params} );
  }

  getEstadisticasPorId(id: number) {
    return this.http.get<GetEstadisticasJugadorDTO>(`${this.apiUrl}/jugadores/${id}/estadisticas`);
  }

  getClubes() {
    return this.http.get<GetCLubesDTO[]>(`${this.apiUrl}/clubes`);

  }

  putEstadisticasJugador(id: number, estadisticas: PutEstadisticasDTO) {
    return this.http.put<void>(`${this.apiUrl}/jugadores/${id}/estadisticas`, estadisticas);
  }
}
