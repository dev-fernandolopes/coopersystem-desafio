import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {Investimento} from "../../shared/interfaces/investimento";
import {InvestimentoService} from "../../shared/services/investimento.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-investimento-resgate',
  templateUrl: './investimento-resgate.component.html',
  styleUrls: ['./investimento-resgate.component.scss']
})
export class InvestimentoResgateComponent implements OnInit {

  listaInvestimentos: Array<Investimento> = [];

  investimento: Investimento;
  resgate: Array<number> = [];

  params: any;

  constructor(private service: InvestimentoService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.params = params;

      this.listarInvestimentos();
    });
  }

  listarInvestimentos() {
    this.service.listarInvestimentos().subscribe((response: any) => {
      this.listaInvestimentos = response.response.data.listaInvestimentos;

      for (let i = 0; i < this.listaInvestimentos.length; i++) {
        let inv = this.listaInvestimentos[i];
        if (inv.nome === this.params.nome) {
          this.investimento = inv;
          break;
        }
      }

    })
  }


  calculoResgate(): number {
    let soma: number = 0;
    this.resgate.forEach(r => {
      soma += Number(r);
    })

    return soma;
  }
}
