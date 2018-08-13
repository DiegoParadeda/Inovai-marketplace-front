import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-produtos',
  templateUrl: './crud-produtos.component.html',
  styleUrls: ['./crud-produtos.component.scss']
})
export class CrudProdutosComponent implements OnInit {
  produtoList = [
    { id: 1, nome: "Incit", cidade: "Itajubá", escopo: "Tecnologia", empresas: 32 },
    { id: 2, nome: "Moontech", cidade: "Itajuba", escopo: "Master Tecnologias", empresas: 5 }
  ];
  selectedProduto: any;
  createOrEdit = false;
  constructor() { }

  ngOnInit() {
  }

  create() {
    this.createOrEdit = true;
    this.selectedProduto= {nome: "", cidade: "", escopo:"", empresas: ""};
  }

  edit(inst) {
    this.createOrEdit = true;
    this.selectedProduto = inst;
  }

}
