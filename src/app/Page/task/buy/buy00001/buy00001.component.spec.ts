import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buy00001Component } from './buy00001.component';

describe('Buy00001Component', () => {
  let component: Buy00001Component;
  let fixture: ComponentFixture<Buy00001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buy00001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buy00001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
