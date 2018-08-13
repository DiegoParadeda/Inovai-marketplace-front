import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-empresas',
  templateUrl: './crud-empresas.component.html',
  styleUrls: ['./crud-empresas.component.scss']
})
export class CrudEmpresasComponent implements OnInit {
  empresaList = [
    { id: 1, nome: "Ypoos", cidade: "Itajubá", escopo: "Tecnologia", produtos: 1 },
    { id: 2, nome: "Moontech", cidade: "Itajuba", escopo: "Master Tecnologia", produtos: 5 }
  ];
  selectedEmpresa: any;
  createOrEdit = false;
  constructor() { }

  ngOnInit() {
  }

  create() {
    this.createOrEdit = true;
    this.selectedEmpresa = { nome: "", cidade: "", escopo: "", produtos: "" };
  }

  edit(inst) {
    this.createOrEdit = true;
    this.selectedEmpresa = inst;
  }

}
