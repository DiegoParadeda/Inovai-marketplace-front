import { Routes } from '@angular/router';

import { CrudInstituicoesComponent } from '../../crud-instituicoes/crud-instituicoes.component';
import { CrudEmpresasComponent } from '../../crud-empresas/crud-empresas.component';
import { CrudProdutosComponent } from '../../crud-produtos/crud-produtos.component';
import { CrudUsuariosComponent } from '../../crud-usuarios/crud-usuarios.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { DatatableComponent } from '../../datatable/datatable.component'

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'crud-instituicoes',      component: CrudInstituicoesComponent },
    { path: 'crud-empresas',      component: CrudEmpresasComponent },
    { path: 'crud-produtos',      component: CrudProdutosComponent },
    { path: 'crud-usuarios',      component: CrudUsuariosComponent },
    { path: 'table-table',      component: DatatableComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
];
