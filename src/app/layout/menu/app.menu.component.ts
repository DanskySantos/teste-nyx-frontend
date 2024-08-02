import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor() {
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Perfil',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/profile'],
            },
            {
                label: 'Despesas por Mês',
                icon: 'pi pi-list',
                routerLink: ['/home/despesas-por-mes']
            },
            {
                label: 'Despesas por Categoria',
                icon: 'pi pi-list',
                routerLink: ['/home/despesas-por-categoria']
            },
            {
                label: 'Dinheiro por Fonte',
                icon: 'pi pi-list',
                routerLink: ['/home/dinheiro-por-fonte']
            }
        ];
    }
}
