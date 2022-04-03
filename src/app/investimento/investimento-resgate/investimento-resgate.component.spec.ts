import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoResgateComponent } from './investimento-resgate.component';

describe('InvestimentoResgateComponent', () => {
  let component: InvestimentoResgateComponent;
  let fixture: ComponentFixture<InvestimentoResgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestimentoResgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentoResgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
