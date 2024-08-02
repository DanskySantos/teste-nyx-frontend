import {Component, OnInit} from '@angular/core';
import {UserService} from "../profile/service/user-service";
import {UserModel} from "../shared/models/user.model";
import {Router} from "@angular/router";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    userData?: UserModel;
    loading: boolean = false;

    constructor(private userService: UserService,
                private router: Router,
                private ngxUiLoaderService: NgxUiLoaderService) {
    }

    ngOnInit() {
    }


    formatarData(data: string): string {
        const dataNascimento = new Date(data);
        return dataNascimento.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
}
