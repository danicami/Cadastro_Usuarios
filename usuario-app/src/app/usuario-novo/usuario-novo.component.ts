import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsuarioApiService } from 'src/service/usuario-api.service';
import { Escolaridade } from './../../model/escolaridade';
import { EscolaridadeService } from 'src/service/escolaridade-api.service';

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.scss'],
  providers : [EscolaridadeService]
})
export class UsuarioNovoComponent implements OnInit {

  usuarioForm: FormGroup;
  isLoadingResults = false;
  currentDate = new Date();
  escolaridades : Escolaridade[];

  constructor(private router: Router, private api: UsuarioApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'sobrenome': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'dataNascimento': [null, Validators.required],
      'escolaridade': [null, Validators.required], 
    });
  }

  addUsuario(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addUsuario(form)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/usuario-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
      }
}
