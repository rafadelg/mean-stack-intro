/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OtherproviderComponent } from './otherprovider.component';

describe('OtherproviderComponent', () => {
  let component: OtherproviderComponent;
  let fixture: ComponentFixture<OtherproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
