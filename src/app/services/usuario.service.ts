import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private usuariosSubject = new BehaviorSubject<Usuario[]>([]);
  usuarios$ = this.usuariosSubject.asObservable();

  adicionar(usuario: Usuario) {
    const lista = this.usuariosSubject.value;
    this.usuariosSubject.next([...lista, usuario]);
  }

  getTodos(): Usuario[] {
    return this.usuariosSubject.value;
  }
}
