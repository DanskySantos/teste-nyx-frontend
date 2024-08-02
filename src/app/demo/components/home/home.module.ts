import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AvatarModule} from "primeng/avatar";
import {DialogModule} from 'primeng/dialog';
import {ProfileModule} from "../profile/profile.module";
import {AccordionModule} from "primeng/accordion";
import {DespesasPorMesComponent} from './despesasTotaisPorMes/despesas-por-mes.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {DinheiroPorFonteComponent} from "./dinheiroPorFonte/dinheiro-por-fonte.component";
import {DespesasPorCategoriaComponent} from "./despesasTotaisPorCategoria/despesas-por-categoria.component";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        DropdownModule,
        InputTextareaModule,
        AvatarModule,
        NgOptimizedImage,
        DialogModule,
        ProfileModule,
        AccordionModule,
        NgxUiLoaderModule
    ],
    exports: [
        HomeComponent,
        DespesasPorMesComponent,
        DinheiroPorFonteComponent,
        DespesasPorCategoriaComponent,
    ],
    declarations: [
        HomeComponent,
        DespesasPorMesComponent,
        DinheiroPorFonteComponent,
        DespesasPorCategoriaComponent,
    ]
})
export class HomeModule {
}
