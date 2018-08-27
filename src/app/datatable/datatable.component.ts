import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';

import {InstituicaoService} from '../instituicao.service';
import {Subject} from 'rxjs/Subject';
import {SearchServiceInterface} from '../search-service-interface';


@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnDestroy, OnInit, AfterViewInit {
    data = [
        // {id: 1, nome: 'Incit', cidade: 'Itajubá', escopo: 'Tecnologia', empresas: 32},
        // {id: 2, nome: 'Moontech', cidade: 'Itajuba', escopo: 'Master Tecnologias', empresas: 5}
    ];

    selectData: any;
    createOrEdit = false;
    dtOptions: DataTables.Settings = {};
    @Input() searchService: SearchServiceInterface;
    @Input() tableMap;
    @Input() tableTitle;
    @Input() withCreateButton;
    @Input() canEdit;
    @Input() canDelete;
    @Output() create = new EventEmitter();
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();
    tableHeaders;
    tableDataProperty;
    @ViewChild('dataTable')
    private el: ElementRef;

    constructor() {
    }

    ngOnInit(): void {
        this.tableHeaders = Object.keys(this.tableMap).map(key => {
            return this.tableMap[key];
        }).map(x => x);
        // console.log(this.tableHeaders);
        this.tableDataProperty = Object.keys(this.tableMap); // [id, nome, ...]
        // console.log(this.tableHeaders);
        const that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            initComplete: (settings, json) => {
                // CAMPO DE BUSCA DESIGN
                const searchDiv = this.el.nativeElement.querySelector('.dataTables_filter');
                const searchInput = this.el.nativeElement.querySelector('.dataTables_filter input');
                const searchText = searchDiv.childNodes[0].childNodes[0];
                searchText.nodeValue = '';
                console.log(searchDiv.childNodes[0]);
                searchDiv.childNodes[0].classList.add('form-group');
                searchDiv.childNodes[0].classList.add('form-inline');
                searchInput.classList.add('form-control');
                searchInput.setAttribute('placeholder', 'Buscar...');

                // CAMPO DE PAGINACAO DESIGN
                const paginationDiv = this.el.nativeElement.querySelector('.dataTables_length');

                paginationDiv.childNodes[0].classList.add('form-group');
                paginationDiv.childNodes[0].classList.add('form-inline');
                paginationDiv.childNodes[0].childNodes[1].classList.add('form-control');
                paginationDiv.childNodes[0].childNodes[1].classList.add('input-sm');
                paginationDiv.childNodes[0].childNodes[1].setAttribute('style', 'margin-left: 10px !important;');

                const els = this.el.nativeElement.getElementsByClassName('no-sort');
                [].forEach.call(els, function (el) {
                    el.classList.remove('sorting');
                });
            },
            ajax: (dataTablesParameters: any, callback) => {
                console.log('Datatable component fetching data..');
                console.log(dataTablesParameters);
                that.searchService
                    .list(
                        1, dataTablesParameters.start, {
                            fieldName: this.tableHeaders[dataTablesParameters.order[0].column],
                            order: this.convertOrderNameToNumber(dataTablesParameters.order[0].dir)
                        }, {
                            fieldName: 'nome',
                            value: dataTablesParameters.search.value
                        }
                    ).subscribe((resp: any) => {
                    /*  {
                          search: {value: , field: "nome"}
                      }*/
                    that.data = resp.data;

                    callback({
                        recordsTotal: resp.total,
                        recordsFiltered: resp.total,
                        data: []
                    });
                });
            }
        };
    }

    ngAfterViewInit() {
    }

    private convertOrderNameToNumber(orderName: string) {
        if (orderName === 'asc') {
            return 1;
        }
        return -1;
    }

    ngOnDestroy(): void {
    }

    // create() {
    //     this.createOrEdit = true;
    //     this.selectedInstituicao = {nome: '', cidade: '', escopo: '', empresas: ''};
    // }
    //
    // edit(inst) {
    //     this.createOrEdit = true;
    //     this.selectedInstituicao = inst;
    // }

}
