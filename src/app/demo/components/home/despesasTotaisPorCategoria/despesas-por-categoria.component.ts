import {Component, OnInit} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {BudgetService} from "../services/budget.service";
import {UserModel} from "../../shared/models/user.model";
import Chart from 'chart.js/auto';
import {MonthsEnum} from "../../enums/months-enum";

@Component({
    templateUrl: './despesas-por-categoria.component.html',
    selector: 'app-despesas-por-mes',
})
export class DespesasPorCategoriaComponent implements OnInit {

    visible: boolean = false;
    months?: MonthsEnum[];
    user?: UserModel;
    chart: any = []
    categoria_economica_nome!: string[];
    total_despesas!: number[];

    constructor(public layoutService: LayoutService,
                private budgetService: BudgetService) {
        this.startLists();
    }

    ngOnInit(): void {
        this.getBudgetExpenses();
    }

    createChart() {
        this.chart = new Chart('canvas', {
            type: 'doughnut',
            data: {
                labels: this.categoria_economica_nome,
                datasets: [
                    {
                        label: 'Despesas totais',
                        data: this.total_despesas,
                        borderWidth: 1,
                        backgroundColor: [
                            '#35647f',
                            '#4a8cb2',
                        ],
                        hoverOffset: 4,
                    },
                ],
            },
            options: {
                responsive: true
            },
        })
    }

    startLists() {
        this.months = Object.values(MonthsEnum);
    }

    private async getBudgetExpenses() {
        this.budgetService.getDespesasTotaisPorCategoria().subscribe(data => {
            this.categoria_economica_nome = data.map(item => item.categoria_economica_nome);
            this.total_despesas = data.map(item => item.total_despesas);
            this.createChart();
            }
        );
    }

    find() {
        this.budgetService.getDespesasTotaisPorMes();
    }
}
