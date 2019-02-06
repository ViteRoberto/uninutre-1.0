import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacemosPage } from './hacemos.page';

describe('HacemosPage', () => {
  let component: HacemosPage;
  let fixture: ComponentFixture<HacemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
