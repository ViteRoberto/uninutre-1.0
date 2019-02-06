import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcionarioPage } from './porcionario.page';

describe('PorcionarioPage', () => {
  let component: PorcionarioPage;
  let fixture: ComponentFixture<PorcionarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcionarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
