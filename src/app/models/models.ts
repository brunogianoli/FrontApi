
export interface GetJugadoresDTO {
  id: number;
  nombre: string;
  posicion: string;
  debut: string;
}

export interface GetEstadisticasJugadorDTO {
  partidosJugados: number;
  cantidadGoles: number;
  piernaHabil: string;
}

export interface PutEstadisticasDTO{
  cantidadGoles: number;
  partidosJugados: number;
  piernaHabil: string;
}

export interface GetCLubesDTO{
  nombre: string;
  pais: string;
  cantHinchas: number;
}
