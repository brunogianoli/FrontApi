
export interface GetJugadoresDTO {
  id: number;
  nombre: string;
  posicion: string;
  debut: string;
}

export interface GetEstadisticasJugadorDTO {
  partidosJugados: number;
  cantGoles: number;
  piernaHabil: string;
}
