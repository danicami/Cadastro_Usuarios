import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioApiService } from 'src/service/usuario-api.service';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.scss']
})
export class UsuarioDetalheComponent implements OnInit {
  usuario: Usuario = { id: 0, nome:'', sobrenome: '', email: '', dataNascimento: null, escolaridade: 0 };
  isLoadingResults = true;
  descricaoEscolaridade="Nenhuma";
  constructor(private router: Router, private route: ActivatedRoute, private api: UsuarioApiService) { }

  ngOnInit() {
    this.getUsuario(this.route.snapshot.params['id']);
  }

  getUsuario(id) {
    this.api.getUsuario(id)
      .subscribe(data => {
        this.usuario = data;
        console.log(this.usuario);
        this.isLoadingResults = false;
        switch (data.escolaridade) {
          case 1:
              this.descricaoEscolaridade = "Infantil";
              break;
          case 2:
              this.descricaoEscolaridade = "Fundamental";
              break;
          case 3:
              this.descricaoEscolaridade = "Médio";
              break;
          case 4:
              this.descricaoEscolaridade = "Superior";
              break;
          default:
              this.descricaoEscolaridade = "Nenhuma";
              break;           
        }
        });
  }

  deleteUsuario(id) {
    this.isLoadingResults = true;
    this.api.deleteUsuario(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/usuarios']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
