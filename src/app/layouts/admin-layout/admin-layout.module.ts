import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {CrudEmpresasComponent} from '../../crud-empresas/crud-empresas.component';
import {CrudInstituicoesComponent} from '../../crud-instituicoes/crud-instituicoes.component';
import {CrudProdutosComponent} from '../../crud-produtos/crud-produtos.component';
import {CrudUsuariosComponent} from '../../crud-usuarios/crud-usuarios.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {DatatableComponent} from '../../datatable/datatable.component';
import {DataTablesModule} from 'angular-datatables';
import {HttpModule} from '@angular/http';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
} from '@angular/material';
import {InstituicaoService} from '../../instituicao.service';
import {HttpClientModule} from '@angular/common/http';
import {NotifyService} from '../../notify.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpModule,
        HttpClientModule,
        MatButtonModule,
        MatRippleModule,
        MatInputModule,
        MatTooltipModule,
        DataTablesModule,
    ],
    declarations: [
        CrudEmpresasComponent,
        CrudInstituicoesComponent,
        CrudProdutosComponent,
        CrudUsuariosComponent,
        DashboardComponent,
        DatatableComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        TableListComponent,
        TypographyComponent,
        UpgradeComponent,
        UserProfileComponent,
    ],
    providers: [
        InstituicaoService,
        NotifyService
    ],
})

export class AdminLayoutModule {
}
