import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudInstituicoesComponent } from './crud-instituicoes.component';

describe('CrudInstituicoesComponent', () => {
  let component: CrudInstituicoesComponent;
  let fixture: ComponentFixture<CrudInstituicoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudInstituicoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudInstituicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
