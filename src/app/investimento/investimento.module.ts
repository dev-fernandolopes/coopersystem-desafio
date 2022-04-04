import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestimentoComponent } from './investimento.component';
import {SharedModule} from "../shared/shared.module";
import { InvestimentoResgateComponent } from './investimento-resgate/investimento-resgate.component';
import { InvestimentoListagemComponent } from './investimento-listagem/investimento-listagem.component';
import {InvestimentoRoutingModule} from "./investimento-routing.module";
import { ModalResgateComponent } from './modal-resgate/modal-resgate.component';

@NgModule({
  declarations: [
    InvestimentoComponent,
    InvestimentoResgateComponent,
    InvestimentoListagemComponent,
    ModalResgateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InvestimentoRoutingModule
  ]
})
export class InvestimentoModule { }
