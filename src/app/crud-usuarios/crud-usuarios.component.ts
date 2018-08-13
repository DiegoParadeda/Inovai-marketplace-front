import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.scss']
})
export class CrudUsuariosComponent implements OnInit {
  sysUserList = [
    { id: 1, nome: "Incit", cidade: "Itajubá", escopo: "Tecnologia", empresas: 1 },
    { id: 2, nome: "Moontech", cidade: "Itajuba", escopo: "Master Tecnologias", empresas: 5 }
  ];
  instituicaoUserList = [
    { id: 1, nome: "Incit", cidade: "Itajubá", escopo: "Tecnologia", empresas: 2 },
    { id: 2, nome: "Moontech", cidade: "Itajuba", escopo: "Master Tecnologias", empresas: 5 }
  ];
  empresaUserList = [
    { id: 1, nome: "Incit", cidade: "Itajubá", escopo: "Tecnologia", empresas: 3 },
    { id: 2, nome: "Moontech", cidade: "Itajuba", escopo: "Master Tecnologias", empresas: 5 }
  ];
  clientList = [
    { id: 1, nome: "Incit", cidade: "Itajubá", escopo: "Tecnologia", empresas: 4 },
    { id: 2, nome: "Moontech", cidade: "Itajuba", escopo: "Master Tecnologias", empresas: 5 }
  ];
  selectedUsuario: any;
  createOrEdit = false;

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.createOrEdit = true;
    this.selectedUsuario= {nome: "", cidade: "", escopo:"", empresas: ""};
  }

  edit(inst) {
    this.createOrEdit = true;
    this.selectedUsuario = inst;
  }

}
