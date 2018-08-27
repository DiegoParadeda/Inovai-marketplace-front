import {Component, OnInit} from '@angular/core';
import {InstituicaoService} from '../instituicao.service';
import {MESSAGES, NotifyService} from '../notify.service';

@Component({
    selector: 'app-crud-instituicoes',
    templateUrl: './crud-instituicoes.component.html',
    styleUrls: ['./crud-instituicoes.component.scss']
})
export class CrudInstituicoesComponent implements OnInit {
    instituicaoList = [
        // {id: 1, nome: 'Incit', cidade: 'Itajubá', escopo: 'Tecnologia', empresas: 32},
        // {id: 2, nome: 'Moontech', cidade: 'Itajuba', escopo: 'Master Tecnologias', empresas: 5}
    ];
    selectedInstituicao: any;
    createOrEdit = false;
    dataTableMap = {};

    constructor(public instituicaoService: InstituicaoService, private notify: NotifyService) {
        this.dataTableMap = {id: 'ID', nome: 'Nome', escopo: 'Escopo', cidade: 'Cidade', empresas: 'Empresas'};
    }

    ngOnInit() {
    }

    create() {
        this.createOrEdit = true;
        this.selectedInstituicao = {nome: null, cidade: null, escopo: null, empresas: null};
    }

    submitNew() {
        console.log('Create: ' + this.selectedInstituicao);
        this.instituicaoService.create(this.selectedInstituicao).subscribe((success: any) => {
            this.createOrEdit = false;
            this.notify.showNotification('Instiuicao criada com <b>sucesso!</b>', MESSAGES.SUCCESS);
        }, error => {
            this.notify.showNotification('Ocorreu um erro..', MESSAGES.ERROR);
            console.log(error);
        })
    }

    submitEdit() {
        console.log('Edit: ' + Object.keys(this.selectedInstituicao));
        this.instituicaoService.edit(this.selectedInstituicao).subscribe((success: any) => {
            this.createOrEdit = false;
            this.notify.showNotification('Instiuicao editada com <b>sucesso!</b>', MESSAGES.WARNING);
        }, error => {
            this.notify.showNotification('Ocorreu um erro..', MESSAGES.ERROR);
            console.log(error);
        })
    }

    edit(inst) {
        this.createOrEdit = true;
        this.selectedInstituicao = inst;
    }

    delete(inst) {
        if (prompt('Voce tem certeza que quer deletar essa instituicao?\nIsso nao pode ser desfeito!' +
            '\nPor favor, confirme o nome da instituicao') === inst.nome) {
            this.instituicaoService.delete(inst).subscribe((success: any) => {
                this.createOrEdit = false;
                this.notify.showNotification('Instiuicao deletada com <b>sucesso!</b>', MESSAGES.SUCCESS);
            }, error => {
                this.notify.showNotification('Ocorreu um erro..', MESSAGES.ERROR);
                console.log(error);
            })
        }
    }

}
