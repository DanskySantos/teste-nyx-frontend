import {Component, OnInit} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {BudgetService} from "../services/budget.service";
import {UserModel} from "../../shared/models/user.model";
import Chart from 'chart.js/auto';
import {MonthsEnum} from "../../enums/months-enum";
import {elements} from "chart.js";

@Component({
    templateUrl: './dinheiro-por-fonte.component.html',
    selector: 'app-despesas-por-mes',
})
export class DinheiroPorFonteComponent implements OnInit {

    visible: boolean = false;
    months?: MonthsEnum[];
    user?: UserModel;
    chart: any = []
    total_fonte!: number[];
    fonte_recurso_nome!: string[];

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
                labels: this.fonte_recurso_nome,
                datasets: [{
                    label: 'Dinheiro gasto',
                    data: this.total_fonte,
                    borderWidth: 1,
                }],
            },
            options: {
                elements:{
                    bar: {
                        backgroundColor: [
                            '#4a8cb2'
                        ],
                    }
                },
                indexAxis: 'y',
            },
        })
    }

    startLists() {
        this.months = Object.values(MonthsEnum);
    }

    private async getBudgetExpenses() {
        this.budgetService.getDinheiroPorFonte().subscribe(data => {
            this.total_fonte = data.map(item => item.total_fonte);
            this.fonte_recurso_nome = data.map(item => item.fonte_recurso_nome);
            this.createChart();
            }
        );
    }

    find() {
        this.budgetService.getDespesasTotaisPorMes();
    }
}
