import {Component, inject, OnInit} from '@angular/core';
import {GetCLubesDTO, GetJugadoresDTO} from '../../models/models';
import {ApiService} from '../../services/api.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filtros',
  imports: [
    FormsModule
  ],
  templateUrl: './filtros.component.html',
})
export class FiltrosComponent implements OnInit {

  clubes : GetCLubesDTO[] = []
  selectedClub: string = '';
  selectedPosicion: string = '';
  soloActivos: boolean = false;
  fechaDebut: string = '';
  fechaRetiro: string = '';

  posiciones = ["Delantero", "Mediocampista", "Defensor"]

  private apiService: ApiService = inject(ApiService);

  ngOnInit() {
  this.apiService.getClubes().subscribe( response => {
      this.clubes = response
    })
  }
}
