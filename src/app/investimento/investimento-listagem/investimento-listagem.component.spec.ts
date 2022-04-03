import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoListagemComponent } from './investimento-listagem.component';

describe('InvestimentoListagemComponent', () => {
  let component: InvestimentoListagemComponent;
  let fixture: ComponentFixture<InvestimentoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestimentoListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
