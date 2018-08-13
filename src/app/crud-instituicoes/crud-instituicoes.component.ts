import { Component, OnInit } from '@angular/core';
import { InstituicaoService } from '../instituicao.service';

@Component({
  selector: 'app-crud-instituicoes',
  templateUrl: './crud-instituicoes.component.html',
  styleUrls: ['./crud-instituicoes.component.scss']
})
export class CrudInstituicoesComponent implements OnInit {
  instituicaoList = [
    { id: 1, nome: "Incit", cidade: "Itajubá", escopo: "Tecnologia", empresas: 32 },
    { id: 2, nome: "Moontech", cidade: "Itajuba", escopo: "Master Tecnologias", empresas: 5 }
  ];
  selectedInstituicao: any;
  createOrEdit = false;
  constructor(private instituicaoService: InstituicaoService) { }

  ngOnInit() {
      this.instituicaoService.list(10, 0).subscribe((success: any) => {
        console.log(success);
      }, error => {
          console.log("ERROR");
          console.log(error);
      })
  }

  create() {
    this.createOrEdit = true;
    this.selectedInstituicao= {nome: "", cidade: "", escopo:"", empresas: ""};
  }

  edit(inst) {
    this.createOrEdit = true;
    this.selectedInstituicao = inst;
  }

}
