import {inject, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot} from '@angular/router';
import { HomeComponent } from './home.component';
import {DespesasPorMesComponent} from "./despesasTotaisPorMes/despesas-por-mes.component";
import {AccessGuard} from "../guards/access.guard";
import {DespesasPorCategoriaComponent} from "./despesasTotaisPorCategoria/despesas-por-categoria.component";
import {DinheiroPorFonteComponent} from "./dinheiroPorFonte/dinheiro-por-fonte.component";

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            data: {breadcrumb: 'Home'},
            component: HomeComponent
        },
        {
            path: 'despesas-por-mes',
            canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AccessGuard).canActivate(next, state)],
            data: {breadcrumb: 'Despesas Por mês'},
            component: DespesasPorMesComponent
        },
        {
            path: 'despesas-por-categoria',
            canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AccessGuard).canActivate(next, state)],
            data: {breadcrumb: 'Despesas Por Categoria'},
            component: DespesasPorCategoriaComponent
        },
        {
            path: 'dinheiro-por-fonte',
            canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AccessGuard).canActivate(next, state)],
            data: {breadcrumb: 'Dinheiro Por Fonte'},
            component: DinheiroPorFonteComponent
        }
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
