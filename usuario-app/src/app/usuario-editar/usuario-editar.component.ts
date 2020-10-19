import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsuarioApiService } from 'src/service/usuario-api.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.scss']
})
export class UsuarioEditarComponent implements OnInit {
  id: number = 0;
  usuarioForm: FormGroup;
  nome: String = '';
  sobrenome: String = '';
  email: String = '';
  dataNascimento: String;
  escolaridade: number = 0;
  isLoadingResults = false;
  currentDate = new Date();

  constructor(private router: Router, private route: ActivatedRoute, private api: UsuarioApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUsuario(this.route.snapshot.params['id']);
    this.usuarioForm = this.formBuilder.group({
   'nome' : [null, Validators.required],
   'sobrenome' : [null, Validators.required],
   'email' : [null, Validators.required],
   'dataNascimento' : [null, Validators.required],
   'escolaridade' : [null, Validators.required],
  });
  }

  getUsuario(id) {
    this.api.getUsuario(id).subscribe(data => {
      this.id = data.id;
      this.usuarioForm.setValue({
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        dataNascimento: data.dataNascimento,
        escolaridade: data.escolaridade,
      });
    });
  }
  
  updateUsuario(form: NgForm) {
    this.isLoadingResults = true;


    this.api.updateUsuario(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/usuario-detalhe/' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
