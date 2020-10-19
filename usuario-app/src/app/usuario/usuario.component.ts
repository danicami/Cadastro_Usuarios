import { Component, OnInit } from '@angular/core';
import { UsuarioApiService } from 'src/service/usuario-api.service';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {

  displayedColumns: string[] = [ 'nome', 'sobrenome', 'email', 'dataNascimento',  'id'];
  dataSource: Usuario[];
  
  constructor(private _api: UsuarioApiService) { }

  ngOnInit() {
    this._api.getUsuarios()
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
       // this.isLoadingResults = false;
      }, err => {
        console.log(err);
      //  this.isLoadingResults = false;
      });
  }
}
