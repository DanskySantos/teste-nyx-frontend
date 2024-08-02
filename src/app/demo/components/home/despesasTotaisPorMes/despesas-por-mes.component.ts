import {Component, OnInit} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {BudgetService} from "../services/budget.service";
import {UserModel} from "../../shared/models/user.model";
import Chart from 'chart.js/auto';
import {MonthsEnum} from "../../enums/months-enum";

@Component({
    templateUrl: './despesas-por-mes.component.html',
    selector: 'app-despesas-por-mes',
})
export class DespesasPorMesComponent implements OnInit {

    visible: boolean = false;
    months?: MonthsEnum[];
    user?: UserModel;
    chart: any = []
    totalDespesas!: number[];
    mesMovimentacao!: number[];

    constructor(public layoutService: LayoutService,
                private budgetService: BudgetService) {
        this.startLists();
    }

    ngOnInit(): void {
        this.getBudgetExpenses();
    }

    createChart() {
        this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
                labels: this.months,
                datasets: [
                    {
                        label: 'Despesas totais',
                        data: this.totalDespesas,
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                elements:{
                    bar: {
                        backgroundColor: [
                            '#4a8cb2'
                        ],
                    }
                },
            },
        })
    }

    startLists() {
        this.months = Object.values(MonthsEnum);
    }

    private async getBudgetExpenses() {
        this.budgetService.getDespesasTotaisPorMes().subscribe(data => {
            this.totalDespesas = data.map(item => item.totalDespesas);
            this.mesMovimentacao = data.map(item => item.mesMovimentacao);
            this.createChart();
            }
        );
    }
}
