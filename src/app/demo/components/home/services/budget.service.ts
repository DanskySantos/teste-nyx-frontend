import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService as NgxCookieService} from 'ngx-cookie-service';
import {SharedService} from "../../shared/service/shared.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {PageModel} from "../../shared/models/page.model";
import { UserModel } from '../../shared/models/user.model';
import {RecordsModel} from "../../shared/models/records.model";
import {DespesasPorMesModel} from "../../shared/models/despesasPorMes.model";
import {DespesasPorCategoriaModel} from "../../shared/models/despesasPorCategoria.model";
import {DinheiroPorFonteModel} from "../../shared/models/dinheiroPorFonte.model";

@Injectable({
    providedIn: 'root'
})
export class BudgetService extends SharedService {

    constructor(private http: HttpClient,
                private toastrService: ToastrService,
                private router: Router,
                private cookieService: NgxCookieService) {
        super();
    }

    setHeadersForBearer() {
        return new HttpHeaders({
            'Authorization': 'Bearer ' + this.cookieService.get('access_token'),
            'Content-Type': 'application/json'
        });
    }

    getDespesasTotaisPorMes(){
        const headers = this.setHeadersForBearer();
        return this.http.get<DespesasPorMesModel[]>(`${this.apiURL}resource/findByMesMovimentacao`, {headers})
    }

    getDespesasTotaisPorCategoria(){
        const headers = this.setHeadersForBearer();
        return this.http.get<DespesasPorCategoriaModel[]>(`${this.apiURL}resource/findByCategoria`, {headers})
    }

    getDinheiroPorFonte(){
        const headers = this.setHeadersForBearer();
        return this.http.get<DinheiroPorFonteModel[]>(`${this.apiURL}resource/findByFonte`, {headers})
    }
}
