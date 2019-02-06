import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeracionPage } from './moderacion.page';

describe('ModeracionPage', () => {
  let component: ModeracionPage;
  let fixture: ComponentFixture<ModeracionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeracionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
