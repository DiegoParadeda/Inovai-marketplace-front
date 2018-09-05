import {Component, OnInit} from '@angular/core';
import {EmpresaService} from '../empresa.service';
import {MESSAGES, NotifyService} from '../notify.service';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-crud-empresas',
    templateUrl: './crud-empresas.component.html',
    styleUrls: ['./crud-empresas.component.scss']
})
export class CrudEmpresasComponent implements OnInit {
    // empresaList = [
    //     {id: 1, nome: 'Ypoos', cidade: 'Itajubá', escopo: 'Tecnologia', produtos: 1},
    //     {id: 2, nome: 'Moontech', cidade: 'Itajuba', escopo: 'Master Tecnologia', produtos: 5}
    // ];
    selectedEmpresa: any;
    createOrEdit = false;
    dataTableMap = {};
    dtTrigger;

    constructor(public empresaService: EmpresaService, private notify: NotifyService) {
        this.dataTableMap = {id: 'ID', nome: 'Nome', escopo: 'Escopo', cidade: 'Cidade', produtos: 'Produtos'};
        this.dtTrigger = new Subject();
    }

    ngOnInit() {
    }

    create() {
        this.createOrEdit = true;
        this.selectedEmpresa = {nome: null, cidade: null, escopo: null, empresas: null};
    }

    submitNew() {
        console.log('Create: ' + this.selectedEmpresa);
        this.empresaService.create(this.selectedEmpresa).subscribe((success: any) => {
            this.createOrEdit = false;
            this.dtTrigger.next();
            this.notify.showNotification('Empresa criada com <b>sucesso!</b>', MESSAGES.SUCCESS);
        }, error => {
            this.notify.showNotification('Ocorreu um erro..', MESSAGES.ERROR);
            console.log(error);
        })
    }

    submitEdit() {
        console.log('Edit: ' + Object.keys(this.selectedEmpresa));
        const editedEmpresa = this.selectedEmpresa;
        delete editedEmpresa.empresas
        this.empresaService.edit(editedEmpresa).subscribe((success: any) => {
            this.createOrEdit = false;
            this.notify.showNotification('Empresa editada com <b>sucesso!</b>', MESSAGES.WARNING);
        }, error => {
            this.notify.showNotification('Ocorreu um erro..', MESSAGES.ERROR);
            console.log(error);
        })
    }

    edit(emp) {
        this.createOrEdit = true;
        this.selectedEmpresa = emp;
    }

    delete(emp) {
        if (prompt('Voce tem certeza que quer deletar essa empresa?\nIsso nao pode ser desfeito!' +
            '\nPor favor, confirme o nome da empresa') === emp.nome) {
            this.empresaService.delete(emp).subscribe((success: any) => {
                this.createOrEdit = false;
                this.dtTrigger.next();
                this.notify.showNotification('Empresa deletada com <b>sucesso!</b>', MESSAGES.SUCCESS);
            }, error => {
                this.notify.showNotification('Ocorreu um erro..', MESSAGES.ERROR);
                console.log(error);
            })
        }
    }

}
