import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViaCepService } from '../../services/via-cep.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  standalone: true,
  selector: 'app-cadastro',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NgxMaskDirective ],
  styleUrls: ['./cadastro.component.scss'],
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {
  form: any; 

  constructor(
    private fb: FormBuilder,
    private viaCep: ViaCepService,
    private usuarios: UsuarioService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required],
      cep: ['', Validators.required],
      rua: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
    });
  }

  buscarCep() {
    const cep = this.form.value.cep?.replace(/\D/g, '');
    if (cep && cep.length === 8) {
      this.viaCep.buscar(cep).subscribe(dados => {
        if (!dados.erro) {
          this.form.patchValue({
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf,
          });
        } else {
          alert('CEP não encontrado.');
          this.form.patchValue({
            rua: '',
            bairro: '',
            cidade: '',
            estado: '',
          });
        }
      });
    }
  }

  salvar() {
    if (this.form.valid) {
      const usuario: Usuario = this.form.value as Usuario;
      this.usuarios.adicionar(usuario);
      this.form.reset();
      this.router.navigate(['/lista']);
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }
}
