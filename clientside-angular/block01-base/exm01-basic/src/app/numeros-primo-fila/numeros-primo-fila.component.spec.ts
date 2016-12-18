/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumerosPrimoFilaComponent } from './numeros-primo-fila.component';

describe('NumerosPrimoFilaComponent', () => {
  let component: NumerosPrimoFilaComponent;
  let fixture: ComponentFixture<NumerosPrimoFilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosPrimoFilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosPrimoFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
