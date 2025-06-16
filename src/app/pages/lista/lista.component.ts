import { Component } from '@angular/core';
import { CommonModule, AsyncPipe, Location } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  standalone: true,
  selector: 'app-lista-usuarios',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './lista.component.html',
})
export class ListaUsuariosComponent {
  constructor(
    private usuarioService: UsuarioService,
    private location: Location
  ) {}

  get usuarios$() {
    return this.usuarioService.usuarios$;
  }

  voltar() {
    this.location.back();
  }
}
