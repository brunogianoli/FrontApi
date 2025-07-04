import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {GetCLubesDTO, GetJugadoresDTO} from '../../models/models';
import {ApiService} from '../../services/api.service';
import {FormsModule} from '@angular/forms';


export interface Filtros{
  club?: string;
  posicion?: string;
  desde?: string;
  hasta?: string;
}


@Component({
  selector: 'app-filtros',
  imports: [
    FormsModule
  ],
  templateUrl: './filtros.component.html',
})


export class FiltrosComponent implements OnInit {


  @Output() filtrosAplicados = new EventEmitter<Filtros>();

  filtros: Filtros = {
  }

  clubes : GetCLubesDTO[] = []
  posiciones = ["Delantero", "Mediocampista", "Defensor"]

  private apiService: ApiService = inject(ApiService);

  ngOnInit() {
  this.apiService.getClubes().subscribe( response => {
      this.clubes = response
    })
  }

  aplicarFiltros() {
    this.filtrosAplicados.emit(this.filtros);
  }
}
