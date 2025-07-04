import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GetJugadoresDTO} from '../../models/models';

@Component({
  selector: 'app-tabla-principal',
  imports: [],
  templateUrl: './tabla-principal.component.html',
})


export class TablaPrincipalComponent {

  @Input() jugadores: GetJugadoresDTO[] = [];

  @Output() club: EventEmitter<number> = new EventEmitter<number>();
  @Output() estadisticas: EventEmitter<number> = new EventEmitter<number>();
  emitirClub(id: number) {
    this.club.emit(id);
  }
}
